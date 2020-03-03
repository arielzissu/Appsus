import { eventBus } from '../services/event-bus.service.js'
import { bookService } from '../services/book.service.js'

export default {
    template: `
        <section>
            <ul v-if="isNotDeleted">
                <li>Name: {{review.fullName}}</li>
                <li>Rate: {{review.rate}}</li>
                <li>Read AT: {{review.readAt}}</li>
                <li>Review: {{review.reviewBody}}</li>
                <button @click="onDeleteReview(review.id)">X</button>
            </ul>
            <br />
        </section>
    `,
    props: ['bookId', 'review'],
    data() {
        return {
            isNotDeleted: true
        }
    },
    methods: {
        onDeleteReview(id) {
            bookService.deleteCurrReview(id, this.bookId)
                .then(bookId => {
                    eventBus.$emit('showMsg', { txt: `delete the ${bookId} book` })
                })
            this.isNotDeleted = false;
        }
    },
}