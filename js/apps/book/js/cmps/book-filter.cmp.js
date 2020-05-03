export default {
    template: `
    <section class="cards-filter">
        <h3 class="book-filter-title">Filter books</h3>
        <input type="text" 
            @keyup.enter="emitFilter"
            placeholder="Start typing ..." 
            v-model="filterBy.name" 
           
        />
        <input type="number"
            @keyup.enter="emitFilter" 
            v-model="filterBy.minPrice" 
        />
        <input type="number" 
            @keyup.enter="emitFilter"
            v-model="filterBy.maxPrice" 
        />
        <button @click="emitFilter">Search</button>
    </section>
    `,
    props: [],
    data() {
        return {
            filterBy: { name: '', minPrice: 0, maxPrice: 1000 }
        }
    },
    computed: {

    },
    created() {},
    methods: {
        emitFilter() {

            this.$emit('filtered', {...this.filterBy })
        }
    }
}