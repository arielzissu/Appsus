import router from './routes.js'
import bookApp from './pages/book-app.cmp.js'
import navBar from './cmps/nav-bar.cmp.js'
import myMsg from './cmps/my-msg.cmp.js'

new Vue({
    el: '#app',
    router,
    template: `
    <section>
        <nav-bar></nav-bar>
        <my-msg></my-msg>
        <router-view></router-view>
    </section>
    `,
    components: {
        'book-app': bookApp,
        'nav-bar': navBar,
        'my-msg': myMsg
    }
})