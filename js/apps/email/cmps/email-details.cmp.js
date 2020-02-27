import {emailService} from '../services/email.service.js'


export default {
    template:`
        <section v-if="email" class="email-details-container">
          <div class="details-header"> 
              <h1 class="details-subject">{{email.subject}}</h1>
              <button v-on:click="removeEmail" class="details-email-delete">Delete</button>              
            
          </div>
            <div class="details-sender">{{email.sender}}</div>
            <article class="details-content">{{email.content}}</article>

            <router-link :to="'/email/create/'+email.id"> 
               <button class="details-email-replay">Replay</button>  
            </router-link>      
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
        },
        removeEmail(emailId) {
            console.log('Removing');
            emailService.removeEmail(emailId)
                .then(()=>{
                    console.log(`email ${emailId} deleted succesfully`);
                    this.$router.push('/email');
                    // eventBus.$emit(EVENT_SHOW_MSG, {
                    //     txt: `Car ${emailId} deleted succesfully`,
                    //     type: 'success'
                    // })
                })
        }
    },
    created(){
        emailService.getById(this.$route.params.id)
        .then(email=>this.email= email)

    }
}