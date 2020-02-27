import { emailService } from './services/email.service.js'
import emailList from './cmps/email-list.cmp.js'
import leftNav from './cmps/email-left-nav-bar.cmps.js'
import { eventBus } from '../../main/services/event-bus.service.js'



export default {
    template: `
    <section class="email-home-container"> 
        <div class="left-nav-container">
            <left-nav></left-nav> 
        </div>
        <div class="email-list-container">
            <email-list :emails="emails" ></email-list>
            <!-- <router-view></router-view> -->
        </div>
    </section>
`,
    data() {
        return {
            emails: [],
            succsessMsg: {}
        }
    },

    created() {
        emailService.query()
            .then(emails => this.emails = emails);

        eventBus.$on('showMsg', (msg) => {
            console.log('yes', msg)
        })

    },
    components: {
        emailList,
        leftNav
    }
}