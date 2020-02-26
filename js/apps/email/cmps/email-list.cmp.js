import emailPreview from './email-preview.cmp.js'

export default {
    props:['emails'],
    template: `
<section class="emails-container">
<router-link v-for="email in emails" :key="email.id" :to="'/email/'+email.id">
<email-preview  :email="email" ></email-preview>
</router-link>
</section>
 `,
 components:{
    emailPreview
 }
}

