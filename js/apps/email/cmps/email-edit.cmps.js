import {emailService} from '../services/email.service.js'
// import {eventBus} from '../services/event-bus.service.js'

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
            <input required type="text" v-model.trim="email.recipientAddress" />
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
        // return {
        //    email= {
        //     recipientAddress: '',
        //     subject: '',
        //     content: '',
        //     }
        // }
    },
    created(){
        // const carId = this.$route.params.id;
        // if (carId) {
        //     carService.getById(carId)
        //         .then(car => {
        //             // DEEP copy
        //             const copyCar = JSON.parse(JSON.stringify(car))
        //             this.car = copyCar;
        //         })
        // }
    },
    methods: {
    //     sendEmail() {
    //         console.log('Saving');
    //         emailService.saveEmail(this.email)
    //         .then((savedCar) => {
    //             eventBus.$emit('showMsg',{txt:'Saved a Car'+savedCar.id})
    //             this.$router.push('/car')
    //         })
    //     },
        
    },
}