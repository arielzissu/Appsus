import cardKeep from './card-keep.cmp.js'

export default {
    template: `
    <section class="note-prev-main-container">
        <div v-for="note in notes" :key="note.id">
            <card-keep class="card-keep-cmp" :note="note"></card-keep>
        </div>
    </section>
    `,
    props: ['notes'],
    components: {
        'card-keep': cardKeep
    }
}