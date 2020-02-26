
import {emailService} from './services/email.service.js'
import emailList from './cmps/email-list.cmp.js'
import leftNav from './cmps/email-left-nav-bar.cmps.js'



export default {
    template: `
    <section class="email-container"> 
    <h1>emails box</h1>
    <email-list :emails="emails" ></email-list>
    <left-nav></left-nav> 
    </section>
`  ,
    data() {
        return {
           emails:[],
        }
    },
    
    created() {
      emailService.query()
     .then(emails=>this.emails=emails)
    },
    components:{
        emailList,
        leftNav        
    }
}



