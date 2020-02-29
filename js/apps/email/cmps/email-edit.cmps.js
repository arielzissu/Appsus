import { emailService } from '../services/email.service.js'
// import {eventBus} from '../../../main/services/event-bus.service'

export default {
    template: `
    <section class="email-create-form">

        <div class="email-edit-header"> 
            <h1>New Message</h1>
        </div>
        
        <form class="email-edit-form-container" @submit.prevent="sendEmail">
            <div class="email-edit-recipient-address">
                <span>To:</span>
                <input class="email-edit-input" required type="text" v-model.trim="email.sentTo" />
            </div>   
            
            <div class="email-edit-subject">
                <span>Subject:</span>
                <input class="email-edit-input" required type="text" v-model.trim="email.subject"/>
            </div>       
            
            <div class="email-edit-content">
                <textarea class="email-edit-textarea" placeholder="your message" v-model.lazy="email.content"></textarea>
            </div>

            <div class="two-btn-email-edit">
                <button class="email-edit-btn-send" title="Send">Send</button> 

                <router-link to="/email" exact>
                    <div class="email-edit-btn-close" title="Delete"><img src="../img/delete.png" height="20px" alt="Delete"></div>
                </router-link>
            </div>

        </form>

    </section>
    `,
    data() {
        return {
            email: emailService.getEmptyEmail()
        }
    },
    created() {
        const emailId = this.$route.params.id;
        if (emailId) { //if its replay mail
            emailService.getById(emailId)
                .then(email => {
                    let copyEmail = JSON.parse(JSON.stringify(email)) // DEEP copy
                    this.email = copyEmail;
                    this.email.replayNum++;
                    this.email.content = `sent by: ${email.sender}\n \n ${email.content}\n_____________________\n sent by: ${email.sender}\n \n`
                })
        }
    },
    methods: {
        sendEmail() {
            console.log('Saving', this.email.subject);
            this.email.sentAt = new Date().getTime();
            emailService.saveEmail(this.email)
                .then(() => {
                    this.$router.push('/email');
                })
                // .then(() => {
                //     eventBus.$emit('showMsg',{txt:'Youer email sent successfully to:'})
                //     // this.$router.push('/email')
                // })
        },

    },
}