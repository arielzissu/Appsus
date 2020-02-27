export default {
    name: 'note-prev',
    template: `
    <section >
        <div v-if="note.type==='txt'" class="card-txt">
            <p>{{note.info.txt}}</p>
        </div>

        <div v-if="note.type==='list'" class="card-txt">
            <h2>note.info.title</h2>
            <img src="note.info.url">
        </div>
        <div v-if="note.type==='img'" class="card-img">
            <div v-for="todo in note.info.todos">

            </div>
        </div>
    </section>
    `,
    props: ['note'],
}