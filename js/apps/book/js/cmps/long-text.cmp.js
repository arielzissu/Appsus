export default {
    template: `
    <div class="long-text">{{abbreviatedText}}</div>
`,
    props: ['txt'],
    computed: {
        abbreviatedText() {
            return this.txt.substr(0, 100);
        }
    },
}