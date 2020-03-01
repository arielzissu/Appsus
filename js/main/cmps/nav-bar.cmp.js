export default {
    template: `
    <section>
        <button class="nav-bar-menu-btn" v-if="!isOpenNav" @click="toggleMenu">☰</button>
        <div class="navbar-container">
            <button class="nav-btn first seccund" v-if="isOpenNav" @click="toggleMenu">Close Nav</button>
            <button class="nav-btn first" v-if="isOpenNav" @click="goBack">Go Back</button>
            <router-link class="nav-btn underLine-none" to="/" exact>
                Home
            </router-link>
            <router-link class="nav-btn underLine-none" to="/email" exact>
            Mister Email
            </router-link>
            <router-link class="nav-btn underLine-none" to="/home-keep" exact>
            Miss Keep
            </router-link>
            <router-link class="nav-btn underLine-none" to="/book" exact>
            Miss Book
            </router-link>
        </div>
    </section>
    `,
    data() {
        return {
            isOpenNav: false
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        toggleMenu() {
            document.body.classList.toggle('menu-open');
            this.isOpenNav = !this.isOpenNav
        }
    }
}