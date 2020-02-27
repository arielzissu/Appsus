export default {
    name: 'currInput',
    template: `
    <section >      
            <input type="text" 
             v-model="txt"
            @keyup.enter="getChanged()">
    </section>
    `,
    data() {
        return {
            txt: ''
        }
    },
    methods: {
        getChanged() {
            this.$emit('currTxt', this.txt);
            this.txt = '';
        }
    },
}