const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'Finish this shit !',
            courseGoalB: 'Master this shit !',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const rnNumber = Math.random();
            if(rnNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');