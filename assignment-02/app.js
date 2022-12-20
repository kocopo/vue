const app = Vue.createApp({
    data(){
        return{
            alertText: 'Beware the dark, for it burns skin as it does soul.',
            outputText: '',
            tmpText : '',
            confirmText : ''
        };
    },
    methods: {
        showAlert(){
            alert(this.alertText);
        },
        showOutput(event){
            this.outputText = event.target.value;
        },
        saveOutput(event){
            this.tmpText = event.target.value;
        },
        confirmOutput(){
            this.confirmText = this.tmpText;
        }
    }
});
app.mount('#assignment');