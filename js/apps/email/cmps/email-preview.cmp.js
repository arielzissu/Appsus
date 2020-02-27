
    export default {
    props:['email'],
    template: `
  <div class="card-email">          
   <span class="preview-sender">sender: {{email.sender}} </span>
   <span class="preview-subject">subj: {{email.subject}}</span>
   <span class="preview-some-content">cont: {{shortContent}}</span>
   <span class="preview-sent-time">{{sentTime}} </span>  
  </div>
    `,
    //  data(){
    //   return {
    //      sentTime: ''        
    //   } 
  // },
  computed: {
    shortContent(){
      return this.email.content.slice(0,20)+'...'
    },
    sentTime(){
      return new Date(this.email.sentAt).toUTCString() 
    }
  },
  methods:{
     
  },
  created(){

    }
}


