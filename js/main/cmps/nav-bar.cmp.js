export default {
    template: `
    <section class="nav-bar-main-container">
        <!-- <button class="nav-btn-back" @click="goBack">Go Back</button> -->
        
        <router-link to="/" exact>
            <img class="nav-bar-horse-img" width="120px" src="./vectors/horse-blue.png" alt="Horse Image">  
        </router-link>

        <button class="nav-bar-menu-btn" v-if="!isOpenNav" @click="toggleMenu">☰</button>

        <div @click="toggleMenu" class="navbar-btns">
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
            this.$router.go(-1);
        },
        toggleMenu() {
            document.body.classList.toggle('menu-open');
            this.isOpenNav = !this.isOpenNav;
        }
    }
}