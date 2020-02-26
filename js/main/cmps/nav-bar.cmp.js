export default {
    template: `
        <div class="navbar-container">
            <button class="nav-btn first" @click="goBack">GO BACK</button>
            <router-link class="nav-btn underLine-none" to="/" exact>
                Home
            </router-link>
            <router-link class="nav-btn underLine-none" to="/email" exact>
            Mister Email
            </router-link>
            <router-link class="nav-btn underLine-none" to="/home-keep" exact>
            Miss Keep
            </router-link>
        </div>
    `,
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}