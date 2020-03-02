// export default {
//     template: `
//     <section class="email-filter">

//         <input type="text" 
//             @keyup.enter="emitFilter"
//             placeholder="email subject" 
//             v-model="filterBy.subject" 

//         />
//         <!-- <input type="number"
//             @keyup.enter="emitFilter" 
//             v-model="filterBy.minPrice" 
//         />
//         <input type="number" 
//             @keyup.enter="emitFilter"
//             v-model="filterBy.maxPrice" 
//         />
//         <button @click="emitFilter">Search</button> -->
//     </section>
//     `,
//     props: [],
//     data() {
//         return {
//             filterBy: { 
//             subject: '',
//             // minPrice: 0,
//             // maxPrice: 1000 
//         }
//         }
//     },
//     computed: {

//     },
//     created() {},
//     methods: {
//         emitFilter() {

//             this.$emit('filtered', {...this.filterBy })
//         }
//     }
// }




// <!-- <input type="text" 
// placeholder="Minimal speed"
// v-model.number="filterBy.minSpeed"
// /> -->
export default {
    template: `
    <section class="email-filter-container">
        <input class="email-filter-search" type="text" 
            placeholder="email srarching" 
            v-model="filterBy.subject" />
            <img class="email-filter-img-search" src="../img/search.png" alt="">       
    </section>
    `,
    data() {
        return {
            filterBy: { subject: '' }
            //  minSpeed: 0

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