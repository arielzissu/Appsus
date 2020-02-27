export default {
    name: 'note-prev',
    template: `
    <section>
        <div v-if="note.type === 'txt'" class="card-keep-txt">
            <p>{{note.info.txt}}</p>
        </div>

        <div v-if="note.type === 'img'" class="card-keep-txt">
            <h2>{{note.info.title}}</h2>
            <img :src="note.info.url" alt="your pic">
        </div>

        <div v-if="note.type === 'list'" class="card-keep-txt">
            <div>
                <ul v-for="todo in note.info.todos">
                    <li>{{todo}}</li>
                </ul>
            </div>
        </div>

        
    </section>
    `,
    props: ['note'],
}