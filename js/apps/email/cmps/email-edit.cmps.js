import { emailService } from '../services/email.service.js'
// import {eventBus} from '../../../main/services/event-bus.service'

export default {
    template: `
    <section class="email-create-form">
        <div class="email-edit-header"> 
             <h1>New Message</h1>
             <button class="email-edit-btn-close">X</button>
        </div>
       <form @submit.prevent="sendEmail">
          <div class="email-edit-recipient-address">
            <span>To</span>
            <input required type="text" v-model.trim="email.sender" />
          </div>   

          <div class="email-edit-subject">
            <span>Subject</span>
            <input required type="text" v-model.trim="email.subject"/>
          </div>       
            
          <div class="email-edit-content">
                <textarea placeholder="your message" v-model.lazy="email.content"></textarea>
          </div>
                      
            <button>Send</button>            
        </form>
    </section>
    `,
    data() {
        return {
            email: emailService.getEmptyEmail()
                //    email: {
                //     recipientAddress: '',
                //     subject: '',
                //     content: '',
                //     }
        }
    },
    created() {
        const emailId = this.$route.params.id;
        if (emailId) {
            emailService.getById(emailId)
                .then(email => {
                    // DEEP copy
                    const copyEmail = JSON.parse(JSON.stringify(email))
                    this.email = copyEmail;
                })
        }
    },
    methods: {
        sendEmail() {
            console.log('Saving', this.email.subject);
            emailService.saveEmail(this.email);
            this.$router.push('/email');
            // .then(() => {
            //     eventBus.$emit('showMsg',{txt:'Youer email sent successfully to:'})
            //     // this.$router.push('/email')
            // })
        },

    },
}