import cardKeep from './card-keep.cmp.js'

export default {
    template: `
    <section >
        <div v-for="note in notes" :key="note.id">
            <card-keep :note="note"></card-keep>
        </div>
    </section>
    `,
    props: ['notes'],

    components: {
        'card-keep': cardKeep
    }
}