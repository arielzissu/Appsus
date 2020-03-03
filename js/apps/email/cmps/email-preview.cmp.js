export default {
    props: ['email'],
    template: `
    <div class="card-email" v-bind:class="{ unreadBg: !email.isRead }">          
        <span class="preview-sender">{{email.sender}}{{replayNum}} </span>
        <span class="preview-subject">{{email.subject}}</span>
        <span class="preview-some-content">{{shortContent}}</span>
        <span class="preview-sent-time">{{sentTime}} </span>  
    </div>
    `,
    computed: {
        shortContent() {
            return this.email.content.slice(0, 40) + '...'
        },
        sentTime() {
            return new Date(this.email.sentAt).toDateString()
        },
        replayNum() {
            if (this.email.replayNum === 1) return ''
            return '(' + this.email.replayNum + ')'
        }
    },
}