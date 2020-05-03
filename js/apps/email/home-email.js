import { emailService } from './services/email.service.js';
import emailList from './cmps/email-list.cmp.js';
import leftNav from './cmps/email-left-nav-bar.cmps.js';
import emailFilter from './cmps/email-filter.cmp.js';




export default {
    name: 'email-app',
    template: `
        <section class="email-home-container"> 
            <div class="left-nav-container">
                <button class="email-home-menu-btn" v-if="!isOpenNavEmail" @click="toggleBar">☰</button>
                <left-nav @click.native="toggleBar"></left-nav> 
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
            filterBy: null,
            isOpenNavEmail: false
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
            this.filterBy = filterBy;
        },
        toggleBar(){
            document.body.classList.toggle('email-menu-open');
            this.isOpenNavEmail = !this.isOpenNavEmail;
        }
    },
    components: {
        emailList,
        leftNav,
        emailFilter
    }
}