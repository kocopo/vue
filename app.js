const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Finish this shit !',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');