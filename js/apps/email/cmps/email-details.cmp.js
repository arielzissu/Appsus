import {emailService} from '../services/email.service.js'


export default {
    template:`
        <section v-if="email" class="email-details-container">             
            <article>
            <h1>{{email.subject}}</h1>
            </article>
        </section>
    `,
    data(){
        return {
            email: null           
        } 
    },
    computed: {
      
    },
    watch: {
 
    },
    methods:{
        getemail(){
            const emailId = +this.$route.params.id
            emailService.getById(emailId)
            .then(email => {
                this.email = email    
            })
        }
    },
    created(){
        emailService.getById(this.$route.params.id)
        .then(email=>this.email= email)

    }
}