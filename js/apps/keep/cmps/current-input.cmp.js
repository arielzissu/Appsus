import { keepService } from '../services/keep-service.js'

var noteText = {
    template: `
    <section>
        <input @keyup.enter="openCard(0)" v-model="txt" class="input-main-home" type="text" placeholder="Text Here">
    </section>
    `,
    data() {
        return {
            txt: ''
        }
    },
    methods: {
        openCard() {
            console.log('ev:', this.txt);
            this.$emit('currTxt', this.txt, 0);
            this.txt = '';
        }
    }
}

var noteTodos = {
    template: `
    <section>
        <input @keyup.enter="openCard(2)" v-model="txt" class="input-main-home" type="text" placeholder="Enter comma separated list...">
    </section>
    `,
    data() {
        return {
            txt: ''
        }
    },
    methods: {
        openCard() {
            console.log('ev:', this.txt);
            this.$emit('currTxt', this.txt, 0);
            this.txt = '';
        }
    }
}

var noteImage = {
    template: `
    <section>
        <input @keyup.enter="openCard(1)" v-model="txt" class="input-main-home" type="text" placeholder="Enter image URL...">
    </section>
    `,
    data() {
        return {
            txt: ''
        }
    },
    methods: {
        openCard() {
            console.log('ev:', this.txt);
            this.$emit('currTxt', this.txt, 0);
            this.txt = '';
        }
    }
}


export default {
    name: 'currInput',
    template: `
    <section v-if="notes">
        <component :is="typeCmp" @currTxt="givenTxt"></component>
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
            return this.notes[this.numType].type;
        },
        currInfo() {
            return this.notes[this.numType].info;
        }
    },
    methods: {
        givenTxt(txt, numType) {
            console.log('1111', txt, numType);
            this.$emit('curr-txt', txt, numType)
        }
    },
    components: {
        noteText,
        noteTodos,
        noteImage
    },
}