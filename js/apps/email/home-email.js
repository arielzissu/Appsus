
// export default {
//     template: `
//     <section class="email-container">
//     <email-list> </email-list>

//         <h1>heyyy</h1>
//     </section>
//     `,
//     data(){
//         return {
     
//         }
//     },
    
//     created(){
       
//     },
//     methods: {
       
        
//     },
//     components:{

//     }
// }

// import {emailService} from './services/email.service'
import emailList from './cmps/email-list.cmp.js'



export default {
    template: `
    <section class="email-container"> 
    <h1>emails box</h1>
    <email-list :emails="emails" ></<email-list> 
    </section>
`  ,
    data() {
        return {
           emails:[],
        }
    },
    
    created() {
// emailService.query()
// .then(emails=>this.emails=emails)
    },
    components:{
        emailList,        
    }
}



