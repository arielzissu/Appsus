import { bookService } from '../services/book.service.js'
import longText from '../cmps/long-text.cmp.js'
import reviewAdd from "../cmps/review-add.cmp.js"
import reviewList from '../cmps/reviews-list.cmp.js'

export default {
    template: `
    <section v-if="book" class="book-details-container">
        <div>
            <h2 class="book-title">{{book.title}}</h2>
            <h3 class="subtitle">{{book.subtitle}}</h3>
            <h3 class="authors">Authors: {{authorList}}</h3>
            <h4 class="publish-date">publish-date: {{book.publishedDate}}</h4>
            <h5>Length page: {{readLength}}</h5>
            <h6>Year: {{readYear}}</h6>
            <h6 :class="{green: isLowPrice, red: isHighPrice}">Price: {{book.listPrice.amount}}
                <img class="img-sale" v-if="isSale" src="./img/sale2.png" alt="In sale"/>
            </h6>
            <img :src="book.thumbnail">
            <p>Description: {{readDescription}}</p>
            <div class="desc-container">
                <long-text :txt="txt" v-if="longText"></long-text>
                <p class="desc" v-else>{{book.description}}</p>
                 <button v-if="isLonger" class="btn-read-more" @click="longText = !longText"><span v-if="longText">Read More</span><span v-else>Read Less</span></button>
            </div>
            <review-add :book="book"></review-add>
            <review-list :reviews="book.reviews" :bookId="book.id"></review-list>
        </div>
    </section>
    `,
    data() {
        return {
            longText: true,
            book: null,
        }
    },
    computed: {
        authorList() {
            return this.book.authors.join(',')
        },
        readLength() {
            const sumPage = this.book.pageCount;
            if (sumPage > 500) return 'Long reading';
            else if (sumPage > 200) return 'Decent Reading ';
            else if (sumPage < 100) return 'Light Reading';
        },
        readYear() {
            const sumYear = new Date().getFullYear() - this.book.publishedDate;
            if (sumYear > 10) return `${sumYear} (Veteran Book)`;
            if (sumYear > 10) return '${sumYear} (New!)';
        },
        isHighPrice() {
            if (this.book.listPrice.amount > 150) return true;
        },
        isLowPrice() {
            if (this.book.listPrice.amount < 20) return true;
        },
        isSale() {
            return this.book.listPrice.isOnSale;
        },
        readDescription() {
            return this.book.description.slice(0, 99);
        },
        txt() {
            return this.book.description
        },
        isLonger() {
            if (this.book.description.length < 100) return false;
            return true;
        }
    },
    methods: {
        getBook() {
            const bookId = this.$route.params.bookId;
            bookService.getBookById(bookId)
                .then(book => {
                    this.book = book;
                    console.log('this.book', this.book);
                })
        }
    },
    components: {
        'long-text': longText,
        'review-add': reviewAdd,
        'review-list': reviewList
    },
    created() {
        this.getBook()
    }
}