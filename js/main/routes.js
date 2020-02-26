import homePage from './pages/home.js'
import emailApp from '../apps/email/home-email.js'
import keepApp from '../apps/keep/pages/home-keep.js'
import emailDetails from '../apps/email/cmps/email-details.cmp.js'

const routes = [
    { path: '/', component: homePage },
    { path: '/email', component: emailApp },
    {path:'/email/:id', component: emailDetails},
    { path: '/home-keep', component: keepApp },
];

const router = new VueRouter({ routes })

export default router;