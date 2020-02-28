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
            email: null  ,
            existId: null         
        } 
    },
    computed: {
      
    },
    watch: {
 
    },
    methods:{
        getemail(){
            //  this.existId = +this.$route.params.id
            emailService.getById(this.existId)
            .then(email => {
                this.email = email    
            })
        },
        removeEmail() {
            console.log(this.existId);
            emailService.removeEmail(this.existId)
                .then(()=>{
                    console.log(`email deleted succesfully`)
                    this.$router.push('/email')                
                })
            
        }     
        
    },
    created(){
        this.existId = this.$route.params.id;
        emailService.getById(this.$route.params.id)
        .then(email=>this.email= email);
        emailService.markAsRead(this.existId);
    },
    
}


