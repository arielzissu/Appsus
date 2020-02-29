import { keepService } from '.././services/keep-service.js'
export default {
    name: 'note-prev',
    template: `
    <section class="card-keep-container-main" :style="{backgroundColor: note.style.backgroundColor}" @click="onCliked">

        <div  v-if="note.type === 'txt'" class="card-keep-txt">
            <p class="card-keep-p" :style="{backgroundColor: note.style.backgroundColor}" cols="30" rows="15">{{note.info.txt}}</p>
        </div>
        <div v-if="note.type === 'img'" class="card-keep-txt">
            <h2>{{note.info.title}}</h2>
            <img class='img-note' :src="note.info.url" alt="Wrang URL">
        </div>
        <div v-if="note.type === 'list'" class="card-keep-txt">
            <ul v-for="todo in note.info.todos">
                <li>{{todo}}</li>
            </ul>
        </div>

        <div class="card-keep-two-btn" v-if="isCliked">
            <div @click="onDelete"><img height="20px" src="../img/delete.png" alt="Delete" title="Delete"></div>
            <div @click="onPin"><img height="20px" src="../img/pin.png" alt="Pin" title="Pin"></div>
                <input @input="onChangeColor(note.style.backgroundColor)" value="note.style.backgroundColor" v-model="note.style.backgroundColor" title="Colors" type="color">
        </div>
    </section>
    `,
    props: ['note'],
    data() {
        return {
            isCliked: false,
        }
    },
    computed: {
        styleColor() {
            return {
                background: (this.note.style)
            }
        }

    },
    methods: {
        onCliked() {
            this.isCliked = !this.isCliked
        },
        onDelete() {
            console.log('this.note.id', this.note.id);
            keepService.removeNote(this.note.id)
                .then(ans => console.log(ans))
        },
        onPin() {
            keepService.pinningNote(this.note.id)
        },
        onChangeColor(color) {
            console.log('color: ', color);
            keepService.changeColor(color, this.note.id);
        }

    }
}