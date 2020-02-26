import home from './pages/home.js'
import misterEmail from './pages/mister-email.js'


const routes = [
    { path: '/', component: home },
    { path: '/email', component: misterEmail },

];

const router = new VueRouter({ routes })

export default router;