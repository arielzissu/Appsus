import { eventBus } from '../services/event-bus.service.js'

export default {
    template: `
        <section  class="msg-container">
            <transition name="fade">
                <h1 v-if="isShown">{{msg.txt}}</h1>
            </transition>
        </section>
    `,
    data() {
        return {
            isShown: false,
            msg: {}
        }
    },
    created() {
        eventBus.$on('showMsg', (msg) => {
            this.msg = msg
            this.isShown = true
            setTimeout(() => {
                this.isShown = false
            }, 2000);
        })
    }
}