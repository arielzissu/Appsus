
    export default {
    props:['email'],
    template: `
  <div class="card-email">    
 <h1>email title: </h1>
 <article>email content: </article>
 </div>
    `,
    created() {
    },        
} 

// {{email.title}} {{email.content}}