export default {
    name: 'currInput',
    template: `
    <section >      
        <input type="text" 
        ref="myInput"
        class="current-input-input"
        v-model="txt"
        placeholder="Text Somthing..."
        @keyup.enter="getChanged()">
        
    </section>
    `,
    data() {
        return {
            txt: ''
        }
    },
    mounted() {
        this.$refs.myInput.focus()
    },
    methods: {
        getChanged() {
            this.$emit('currTxt', this.txt);
            this.txt = '';
            location.reload();
        }
    },
}