// import {emailService} from '../services/email.service.js'


// <router-link :to="prevemail">PREV</router-link>
// <router-link :to="nextemail">NEXT</router-link>
export default {
    template:`
        <section v-if=email class="email-details-container">             
            <article>
            <h1>email haeder</h1>
            </article>
        </section>
    `,
    data(){
        return {
            email: null           
        } 
    },
    computed: {
        // nextemail(){
        //     return '/email/' +(this.nextemail())
        // },
        // prevemail(){
        //     return '/email/' +((this.$route.params.id) - 1)
        // },
    },
    watch: {
        // '$route'(to,from){
        //     console.log('from',from)
        //     console.log('to',to)
        //     this.getemail()
        // }
    },
    methods:{
        // getemail(){
        //     const carId = +this.$route.params.id
        //     emailService.getById(carId)
        //     .then(email => {
        //         this.email = email    
        //     })
        // }
    },
    created(){
        // emailService.getById(this.$route.params.id)
        // .then(email=>this.email= email)

    }
}