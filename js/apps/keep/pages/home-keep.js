import { keepService } from '../services/keep-service.js'
import notesInput from '../cmps/notes-input.cmp.js'
import notesList from '../cmps/notes-list.cmp.js'

export default {
    template: `
    <section class="home-keep-container-all">
        <div class="home-keep-input-main">
            <notes-input class="home-keep-current-input" @currTxt="createNote"></notes-input>
            <div class="all-btn-input-main">
                <div @click="changeType('list', 1)" title="List"><span :class="{bold:isSpan1}"><img height="30px" src="./img/list2.png" alt="List"></span></div>
                <div @click="changeType('txt', 2)" title="Text"><span :class="{bold:isSpan2}"><img height="30px" src="./img/letter-a.png" alt="Text"></span></div>
                <div @click="changeType('img', 3)" title="Image"><span :class="{bold:isSpan3}"><img height="30px" src="./img/picture.png" alt="Image"></span></div>
                <div @click="changeType('youtube', 4)" title="Image"><span :class="{bold:isSpan4}"><img height="30px" src="./img/youtube.png" alt="Image"></span></div>
                <div @click="changeType('audio', 5)" title="Image"><span :class="{bold:isSpan5}"><img height="30px" src="./img/speaker.png" alt="Image"></span></div>
            </div>
        </div>
        <notes-list :notes="notes"></notes-list>
    </section>
    `,
    data() {
        return {
            numType: 'txt',
            notes: [],
            isSpan1: false,
            isSpan2: true,
            isSpan3: false,
            isSpan4: false,
            isSpan5: false
        }
    },
    created() {
        keepService.query()
            .then(notes => this.notes = notes)
    },
    methods: {
        changeType(numType, numSpan) {
            this.numType = numType;
            switch (numSpan) {
                case 1:
                    this.isSpan1 = !this.isSpan1;
                    this.isSpan2 = false;
                    this.isSpan3 = false;
                    this.isSpan4 = false;
                    this.isSpan5 = false;
                    break;
                case 2:
                    this.isSpan2 = !this.isSpan2;
                    this.isSpan1 = false;
                    this.isSpan3 = false;
                    this.isSpan4 = false;
                    this.isSpan5 = false;
                    break;
                case 3:
                    this.isSpan3 = !this.isSpan3;
                    this.isSpan1 = false;
                    this.isSpan2 = false;
                    this.isSpan4 = false;
                    this.isSpan5 = false;
                    break;
                case 4:
                    this.isSpan4 = !this.isSpan4;
                    this.isSpan1 = false;
                    this.isSpan2 = false;
                    this.isSpan3 = false;
                    this.isSpan5 = false;
                    break;
                case 5:
                    this.isSpan5 = !this.isSpan5;
                    this.isSpan1 = false;
                    this.isSpan2 = false;
                    this.isSpan3 = false;
                    this.isSpan4 = false;
                    break;
            }
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