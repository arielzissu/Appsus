export default {
    template: `
        <div class="navbar">
            <button class="nav-btn first" @click="goBack">GO BACK</button>
            <router-link class="nav-btn underLine-none" to="/" exact>
                Home
            </router-link>
            <router-link  class="nav-btn underLine-none" to="/about" exact>
                About
            </router-link>
            <router-link  class="nav-btn underLine-none" to="/book">
                Books
            </router-link>
        </div>
    `,
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}