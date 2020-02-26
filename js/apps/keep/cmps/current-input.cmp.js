import { keepService } from '../services/keep-service.js'


var noteText = {
    template: `
        <p>{{info.txt}}</p>
    `,
    props: ['info']
}
var noteTodos = {
    template: `
    <section>
        <ul v-for="todo in info.todos">
            <li>{{todo.txt}}</li>
            <button>X</button>
        </ul>
    </section>
    `,
    props: ['info']
}


export default {
    name: 'currInput',
    template: `
    <section v-if="notes">
    <component :is="typeCmp"
        :info="currInfo"
        ></component>
    </section>
    `,
    props: ['numType'],
    data() {
        return {
            notes: null
        }
    },
    created() {
        keepService.getnotes()
            .then(notes => {
                this.notes = notes
                console.log('this.notes', this.notes);
            })
    },
    computed: {
        typeCmp() {
            return this.notes[this.numType].type
        },
        currInfo() {
            return this.notes[this.numType].info
        }
    },
    components: {
        noteText,
        noteTodos
    },
}