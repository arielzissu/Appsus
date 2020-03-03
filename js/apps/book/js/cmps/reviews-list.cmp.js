import bookReview from './book-review.cmp.js';

export default {
    template: `
        <section class="reviews-list">
            <book-review v-if="reviews" :bookId="bookId" v-for="review in reviews" :key="review.id" :review="review"></book-review>
        </section>
        `,
    props: ['bookId', 'reviews'],
    components: {
        'book-review': bookReview
    },
}