
import {emailService} from './services/email.service.js'
import emailList from './cmps/email-list.cmp.js'
import leftNav from './cmps/email-left-nav-bar.cmps.js'



export default {
    template: `
    <section class="email-home-container"> 
        <div class="left-nav-container">
            <left-nav></left-nav> 
        </div>
        <div class="email-list-container">
            <email-list :emails="emails" ></email-list>
        </div>
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



