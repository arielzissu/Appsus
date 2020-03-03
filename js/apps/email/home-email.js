import { emailService } from './services/email.service.js'
import emailList from './cmps/email-list.cmp.js'
import leftNav from './cmps/email-left-nav-bar.cmps.js'
import emailFilter from './cmps/email-filter.cmp.js'




export default {
    name: 'email-app',
    template: `
    <section class="email-home-container"> 
        <div class="left-nav-container">
            <left-nav></left-nav> 
        </div>
        <div class="email-list-container">
            <email-filter @set-filter="setFilter" ></email-filter>
            <router-view :emails="emailsForDisplay"></router-view>
        </div>
    </section>
`,
    data() {
        return {
            emails: [],
            filterBy: null
        }
    },

    created() {
        emailService.query()
            .then(emails => this.emails = emails);
    },
    computed: {
        emailsForDisplay() {
            if (!this.filterBy) return this.emails;
            return this.emails.filter(email =>
                email.subject.includes(this.filterBy.subject)
            );
        }
    },
    methods: {
        setFilter(filterBy) {
            console.log('filterd!');
            this.filterBy = filterBy
        }
    },
    components: {
        emailList,
        leftNav,
        emailFilter
    }
}