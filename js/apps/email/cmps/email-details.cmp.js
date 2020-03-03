import { emailService } from '../services/email.service.js'

export default {
    template: `
        <section v-if="email" class="email-details-container">

            <div class="details-header"> 
                <div class="details-sender">From: {{email.sender}}</div>
            </div>
            <div class="details-subject">{{email.subject}}</div> 
            <article class="details-content">{{email.content}}</article>
            
            <div class="two-btn-details">
                <router-link :to="'/email/create/'+email.id"> 
                    <div class="details-email-replay" title="Replay"><img src="./img/replay.png" height="20px" alt="Replay"></div>  
                </router-link>  

                <div v-on:click="removeEmail" class="details-email-delete" title="Delete"><img src="./img/delete.png" height="20px" alt="Delete"></div>  
            </div>
        </section>
    `,
    data() {
        return {
            email: null,
            existId: null
        }
    },
    computed: {

    },
    watch: {

    },
    methods: {
        getemail() {
            emailService.getById(this.existId)
                .then(email => {
                    this.email = email
                })
        },
        removeEmail() {
            console.log(this.existId);
            emailService.removeEmail(this.existId)
                .then(() => {
                    console.log(`email deleted succesfully`)
                    this.$router.push('/email')
                })
        }
    },
    created() {
        this.existId = this.$route.params.id;
        emailService.getById(this.$route.params.id)
            .then(email => this.email = email);
        emailService.markAsRead(this.existId);
    },
}