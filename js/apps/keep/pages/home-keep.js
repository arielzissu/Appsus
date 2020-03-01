import { keepService } from '../services/keep-service.js'
import currentInput from '../cmps/current-input.cmp.js'
import cardsKeep from '../cmps/list-cards.cmp.js'

export default {
    template: `
    <section class="home-keep-container-all">
        <div class="home-keep-input-main">
            <current-input class="home-keep-current-input" @currTxt="createNote"></current-input>
            <div class="all-btn-input-main">
                <div @click="changeType('list')" title="List"><img height="30px" src="./img/list2.png" alt="List"></div>
                <div @click="changeType('txt')" title="Text"><img height="30px" src="./img/letter-a.png" alt="Text"></div>
                <div @click="changeType('img')" title="Image"><img height="30px" src="./img/picture.png" alt="Image"></div>
                <div @click="changeType('youtube')" title="Image"><img height="30px" src="./img/youtube.png" alt="Image"></div>
            </div>
        </div>
        <list-cards :notes="notes"></list-cards>
    </section>
    `,
    data() {
        return {
            numType: 'txt',
            notes: [],
        }
    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes)
    },
    methods: {
        changeType(numType) {
            this.numType = numType;
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