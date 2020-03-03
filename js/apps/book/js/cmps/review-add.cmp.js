import { bookService } from '../services/book.service.js'

export default {
    template: `
    <form @submit="saveReview" action="">
        <input v-model="review.fullName" type="text" value="Books Reader">
        <h2>Rate:</h2>
        <select @change="getRate($event)"> 
            <option value="1">🌟</option>
            <option value="2">🌟🌟</option>
            <option value="3">🌟🌟🌟</option>
            <option value="4">🌟🌟🌟🌟</option>
            <option value="5">🌟🌟🌟🌟🌟</option>
        </select>
        <input v-model="review.readAt" type="date">
        <textarea v-model="review.reviewBody" cols="30" rows="10"></textarea>
        <input type="submit" value="submit">
    </form>
    `,
    props: ['book'],
    data() {
        return {
            review: { id: '', fullName: 'Books Reader', rate: null, readAt: '2020/02/25', reviewBody: '' },
        }
    },
    methods: {
        getRate(ev) {
            const rateValue = ev.target.value;
            this.review.rate = rateValue;
        },
        saveReview() {
            bookService.addReview(this.book.id, this.review)
        },
    },
}