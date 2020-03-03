import { bookService } from '../services/book.service.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from './book-details.cmp.js'

export default {
    template: `
    <section class="book-app">
        <book-details v-if="selectedBook" :book="selectedBook"></book-details> 
        <book-filter @filtered="setFilter"></book-filter>
        <book-list :books="booksToShow" @select-book="setBook"></book-list>
    </section>
    `,
    data() {
        return {
            books: null,
            filterBy: {},
            selectedBook: null,
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy.name && !this.filterBy.minPrice && !this.filterBy.maxPrice) return this.books;
            return this.books.filter(book => book.listPrice.amount >= this.filterBy.minPrice &&
                    book.listPrice.amount <= this.filterBy.maxPrice)
                .filter(book => {
                    return book.title.includes(this.filterBy.name)
                });

        },
    },
    created() {
        bookService.query()
            .then(books => this.books = books);
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        setBook(bookId) {
            bookService.getBookById(bookId)
                .then(bookId1 => this.selectedBook = bookId1);
        }
    },
    components: {
        'book-filter': bookFilter,
        'book-list': bookList,
        'book-details': bookDetails,
    }
}