export default {
    template: `
        <div class="navbar">
            <button class="nav-btn first" @click="goBack">GO BACK</button>
            <router-link class="nav-btn underLine-none" to="/" exact>
                Home
            </router-link>
            <router-link class="nav-btn underLine-none" to="/email" exact>
            Mister Email
            </router-link>
        </div>
    `,
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}