export default {
    template: `
        <div class="email-left-navbar">
            <router-link class="underLine-none" to="/email/create" exact>
               <button class="btn-compose">+ Compose</button>
            </router-link> 

            <div class="all-btn-side-nav">  
                 <router-link class="underLine-none" to="/email" exact>
                    <button class="left-nav-btn">Inbox</button>   
                 </router-link> 
         
                    <button class="left-nav-btn">Started</button>            
                    <button class="left-nav-btn">Sent Mail</button>            
                    <!-- <button>Junk</button>             -->
            </div>         
            
        </div>
    `,
}