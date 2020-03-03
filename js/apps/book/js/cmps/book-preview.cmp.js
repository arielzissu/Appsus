export default {
    template: `
    <li>
        <h2>title: {{book.title}}</h2>
        <h3>price: {{book.listPrice.amount}}</h3>
        <img :src="book.thumbnail" />
    </li>
    `,
    props: ['book']
}