import { keepService } from '.././services/keep-service.js'
export default {
    name: 'note-prev',
    template: `
    <section :style="{backgroundColor: note.style.backgroundColor}" @click="onCliked">

        <div  v-if="note.type === 'txt'" class="card-keep-txt">
            <textarea :style="{backgroundColor: note.style.backgroundColor}">{{note.info.txt}}</textarea>
        </div>
        <div v-if="note.type === 'img'" class="card-keep-txt">
            <h2>{{note.info.title}}</h2>
            <img class='img-note' :src="note.info.url" alt="your pic">
        </div>
        <div v-if="note.type === 'list'" class="card-keep-txt">
            <ul v-for="todo in note.info.todos">
                <li>{{todo}}</li>
            </ul>
        </div>

        <div v-if="isCliked">
            <button @click="onDelete"><img height="20px" src="../img/delete.png" alt="Delete"></button>
            <button @click="onPin"><img height="20px" src="../img/pin.png" alt="Pin"></button>
                <input @change="changeColor()" value="note.style.backgroundColor" v-model="note.style.backgroundColor" type="color">
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
        }

    }
}