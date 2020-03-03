export default {
    template: `
    <section class="email-filter-container">
        <input class="email-filter-search" type="text" 
            placeholder="Email searching" 
            v-model="filterBy.subject" />
            <img class="email-filter-img-search" src="../img/search.png" alt="">       
    </section>
    `,
    data() {
        return {
            filterBy: { subject: '' }

        }
    },
    watch: {
        filterBy: {
            handler(newVal) {
                console.log('subject WAS CHANGED! To:', newVal.subject);
                this.emitFilter();
            },
            deep: true
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy)
        }
    }
}