const app = Vue.createApp({
    data(){
        return {
            counter : 0
        }
    },
    watch:{
        counter(){
            const that = this;
            setTimeout(
                () => that.counter = 0,
                5000
            );
        }
    },
    computed:{
        result(){
            if(this.counter > 37){
                return 'Too much!';
            }else if (this.counter < 37){
                return 'Not there yet';
            }else{
                return this.counter;
            }
        }
    },
    methods:{
        add(value){
            this.counter += value;
            console.log(this.counter);
        }
    }
});

app.mount('#assignment');