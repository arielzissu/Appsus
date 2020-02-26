import home from './pages/home.js'
import misterEmail from './pages/mister-email.js'
import keep from './apps/keep/pages/home-keep.js'

const routes = [
    { path: '/', component: home },
    { path: '/email', component: misterEmail },
    { path: '/home-keep', component: keep },

];

const router = new VueRouter({ routes })

export default router;