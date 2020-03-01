import bookReview from './book-review.cmp.js';

export default {
    template: `
        <section class="reviews-list">
            <book-review v-if="reviews" :bookId="bookId" v-for="review in reviews" :key="review.id" :review="review"></book-review>
        </section>
        `,
    // <button @click="onCloseClick">Close reviews</button>
    props: ['bookId', 'reviews'],
    components: {
        'book-review': bookReview
    },
    // methods: {
    //     onCloseClick() {
    //         this.$emit('reviewsClosed');
    //     },

    // }
}