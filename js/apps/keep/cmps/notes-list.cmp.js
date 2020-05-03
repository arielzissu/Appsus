import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="note-prev-main-container">
        <div class="note-prev-main" v-for="note in notes" :key="note.id">
            <note-preview class="card-keep-cmp" :note="note"></note-preview>
        </div>
    </section>
    `,
    props: ['notes'],
    components: {
        'note-preview': notePreview
    }
}