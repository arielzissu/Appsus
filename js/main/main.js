import router from './routes.js'
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
        'nav-bar': navBar,
        'my-msg': myMsg
    }
})