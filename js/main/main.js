import router from './routes.js'
import navBar from './cmps/nav-bar.cmp.js'
import myMsg from './cmps/my-msg.cmp.js'
import footerLine from './cmps/footer-line.cmp.js'


new Vue({
    el: '#app',
    router,
    template: `
    <section class="app-container">
        <nav-bar></nav-bar>
        <my-msg></my-msg>
        <router-view></router-view>
        <footer-line></footer-line>
    </section>
    `,
    components: {
        'nav-bar': navBar,
        'my-msg': myMsg,
        'footer-line': footerLine
    }
})