import homePage from './pages/home.js'
import emailApp from '../apps/email/home-email.js'
import keepApp from '../apps/keep/pages/home-keep.js'
import emailDetails from '../apps/email/cmps/email-details.cmp.js'
import emailEdit from '../apps/email/cmps/email-edit.cmps.js'

const routes = [
    { path: '/', component: homePage },
    {
        path: '/email',
        component: emailApp,
        // children: [{
        //     path: 'create/:id?',
        //     component: emailDetails
        // }]
    },
    { path: '/email/create/:id?', component: emailEdit },
    { path: '/email/:id', component: emailDetails },
    { path: '/home-keep', component: keepApp },
];
const router = new VueRouter({ routes })

export default router;