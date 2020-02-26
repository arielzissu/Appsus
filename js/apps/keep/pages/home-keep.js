import { keepService } from '../services/keep-service.js'
import currentInput from '../cmps/current-input.cmp.js'
import cardsKeep from '../cmps/list-cards.cmp.js'

export default {
    template: `
    <section>
        <h1>keep App!</h1>
        <div class="input-main">
            <current-input @currTxt="bringTxt" :numType="numType"></current-input>
            <div class="all-btn-input-main">
                <button @click="changeType(2)">List</button>
                <button @click="changeType(0)">Text</button>
                <button @click="changeType(1)">Img</button>
            </div>
        </div>
        <list-cards :numType="numType" :text="currText"></list-cards>
    </section>
    `,
    data() {
        return {
            numType: 0,
            currText: ''
        }
    },
    methods: {
        changeType(numType) {
            this.numType = numType
        },
        bringTxt(txt, num) {
            console.log('222', txt, num);
            this.currText = txt;
            this.numType = num;
            keepService.addNote(txt, num);
        }
    },
    components: {
        'current-input': currentInput,
        'list-cards': cardsKeep
    }
}