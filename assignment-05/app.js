const app = Vue.createApp({
    data(){
        return{
            tasks : [],
            hidden: false,
            enteredTask: ''
        };
    },
    computed:{
        listLabel(){
            return this.hidden ? 'Show' : 'Hide';
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';
        },
        toggleList(){
            this.hidden = !this.hidden;
        }
    }
});

app.mount('#assignment');