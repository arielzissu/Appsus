import { keepService } from '../services/keep-service.js'
import missKeep from '../cmps/miss-keep.cmp.js'

export default {
    template: `
    <section>
        <h1>keep App!</h1>
        <div>
            <input type="text" placeholder="Text here...">
            <button @click="changeType(2)">List</button>
            <button>Text</button>
            <button>Img</button>
        </div>
        <miss-keep :numType="numType"></miss-keep>
    </section>
    `,
    data() {
        return {
            numType: null
        }
    },
    methods: {
        changeType(numType) {
            this.numType = numType
        }
    },
    components: {
        'miss-keep': missKeep
    }
}