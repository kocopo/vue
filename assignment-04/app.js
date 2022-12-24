const app = Vue.createApp({
    data(){
        return {
            styleClass: '',
            hide: false,
            inlineColor: ''
        };
    },
    computed:{
        visibleClass(){
           return this.hide ? 'hidden' : 'visible';
        }
    },
    methods:{
        toggleParagraph(){
            console.log("toggling");
            this.hide = !this.hide;
        }
    }
});

app.mount('#assignment');