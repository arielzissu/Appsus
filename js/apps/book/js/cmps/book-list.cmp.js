import bookPreview from './book-preview.cmp.js'

export default {
    template: `
    <section class="books-container">
        <h2>Books List</h2>
        <ul class="cards-books-preview">
            <router-link class="title-cards underLine-none" v-for="(book, idx) in books" :key="book.id" :to="'/book/'+book.id">
                <book-preview :book="book"></book-preview>
            </router-link>
        </ul>
    </section>
    `,

    props: ['books'],
    created() {},
    methods: {
        selectBook(bookId) {
            this.$emit('select-book', bookId)
        }
    },
    components: {
        'book-preview': bookPreview
    }
}