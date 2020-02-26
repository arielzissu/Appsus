import cardKeep from './card-keep.cmp.js'

export default {
    template: `
    <section>
        <div>
            <card-keep :numType="numType"></card-keep>
        </div>
    </section>
    `,
    props: ['numType', 'text'],

    components: {
        'card-keep': cardKeep
    }
}