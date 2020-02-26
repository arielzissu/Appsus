import home from './pages/home.js'
import email from './apps/email/home-email.js'
import keep from './apps/keep/pages/home-keep.js'
import emailDetails from './apps/email/cmps/email-details.cmp.js'

const routes = [
    { path: '/', component: home },
    { path: '/email', component: email },
    {path:'/email/:id', component: emailDetails},
    { path: '/home-keep', component: keep },

];

const router = new VueRouter({ routes })

export default router;