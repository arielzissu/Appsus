import { keepService } from '../services/keep-service.js'
import notesInput from '../cmps/notes-input.cmp.js'
import notesList from '../cmps/notes-list.cmp.js'

export default {
    template: `
    <section class="home-keep-container-all">
        <div class="home-keep-input-main">
            <notes-input class="home-keep-current-input" @currTxt="createNote"></notes-input>
            <div class="all-btn-input-main">
                <div @click="changeType('list')" title="List"><img height="30px" src="./img/list2.png" alt="List"></div>
                <div @click="changeType('txt')" title="Text"><img height="30px" src="./img/letter-a.png" alt="Text"></div>
                <div @click="changeType('img')" title="Image"><img height="30px" src="./img/picture.png" alt="Image"></div>
                <div @click="changeType('youtube')" title="Image"><img height="30px" src="./img/youtube.png" alt="Image"></div>
                <div @click="changeType('audio')" title="Image"><img height="30px" src="./img/speaker.png" alt="Image"></div>
            </div>
        </div>
        <notes-list :notes="notes"></notes-list>
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
        'notes-input': notesInput,
        'notes-list': notesList
    }
}