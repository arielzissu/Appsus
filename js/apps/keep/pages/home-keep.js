import { keepService } from '../services/keep-service.js'
import currentInput from '../cmps/current-input.cmp.js'

export default {
    template: `
    <section>
        <h1>keep App!</h1>
        <div>
            <current-input :numType="numType"></current-input>
            <button @click="changeType(2)">List</button>
            <button>Text</button>
            <button>Img</button>
        </div>
    </section>
    `,
    data() {
        return {
            numType: 2
        }
    },
    methods: {
        changeType(numType) {
            this.numType = numType
        }
    },
    components: {
        'current-input': currentInput
    }
}