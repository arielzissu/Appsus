import router from './routes.js'
import navBar from './cmps/nav-bar.cmp.js'


new Vue({
    el: '#app',
    router,
    template: `
    <section>
        <h1>aaaaa</h1>
        <nav-bar></nav-bar>
        <router-view></router-view>
    </section>
    `,
    components: {
        'nav-bar': navBar,
    }
})