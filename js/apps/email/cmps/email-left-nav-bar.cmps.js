export default {
    template: `
        <div class="email-left-navbar">
            <router-link class="left-nav-btn underLine-none" to="/email/create" exact>
               <button class="btn-compose">+ Compose</button>
            </router-link> 

            <div class="all-btn-side-nav">  
                 <router-link class="left-nav-btn underLine-none" to="/email" exact>
                    <button>Inbox</button>   
                 </router-link> 
         
                    <button>Started</button>            
                    <button>Sent Mail</button>            
                    <button>Junk</button>            
            </div>         
            
        </div>
    `,    
}