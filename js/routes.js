import home from './pages/home.js'
import email from './apps/email/email-main.js'
import keep from './apps/keep/pages/home-keep.js'

const routes = [
    { path: '/', component: home },
    { path: '/email', component: email },
    { path: '/home-keep', component: keep },

];

const router = new VueRouter({ routes })

export default router;