import { keepService } from '../services/keep-service.js'
import currentInput from '../cmps/current-input.cmp.js'
import cardsKeep from '../cmps/list-cards.cmp.js'

export default {
    template: `
    <section>
        <h1>keep App!</h1>
        <div class="input-main">
            <current-input @currTxt="createNote" :notes="notes" :numType="numType"></current-input>
            <div class="all-btn-input-main">
                <button @click="changeType('list')"><img height="20px" src="./img/list.png" alt="List"></button>
                <button @click="changeType('txt')"><img height="20px" src="../img/font.png" alt="Text"></button>
                <button @click="changeType('img')"><img height="20px" src="../img/picture.png" alt="Image"></button>
            </div>
        </div>
        <list-cards :notes="notes"></list-cards>
    </section>
    `,
    data() {
        return {
            numType: 'txt',
            notes: []
        }
    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes)
    },
    methods: {
        changeType(numType) {
            this.numType = numType
        },
        createNote(txt) {
            keepService.addNote(txt, this.numType)
                .then(notes => this.notes = notes)
        }
    },
    components: {
        'current-input': currentInput,
        'list-cards': cardsKeep
    }
}