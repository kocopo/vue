const app = Vue.createApp({
    data(){
        return {
            name : 'Otakar Kočka',
            age : 25,
            imgLink: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        };
    },
    methods :{
        getRandom(){
            return Math.random();
        }
    }
});

app.mount('#assignment');