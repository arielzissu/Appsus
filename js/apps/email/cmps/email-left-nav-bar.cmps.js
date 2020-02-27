export default {
    template: `
        <div class="email-left-navbar">
            <router-link class="nav-btn underLine-none" to="/email/create" exact>
            <button class="btn-compose">+ Compose</button> 
            <div class="all-btn-side-nav">  
                <button>Inbox</button>            
                <button>Started</button>            
                <button>Sent Mail</button>            
                <button>Drafts</button>            
            </div>            
            </router-link>

            <!-- <router-link class="nav-btn underLine-none" to="/email" exact>
            Mister Email
            </router-link>
            <router-link class="nav-btn underLine-none" to="/home-keep" exact>
            Miss Keep
            </router-link> -->
        </div>
    `,    
}