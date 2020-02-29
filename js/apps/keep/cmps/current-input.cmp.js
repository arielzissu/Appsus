export default {
    name: 'currInput',
    template: `
    <section >      
            <input type="text" 
             v-model="txt"
             :placeholder="kindOfNote"
            @keyup.enter="getChanged()">
    </section>
    `,
    prop: ['numType'],
    data() {
        return {
            txt: '',
            kindOfNote: 'Writing text...'
        }
    },
    methods: {
        getChanged() {
            this.$emit('currTxt', this.txt);
            this.txt = '';
        }
    },
}