const app = Vue.createApp({
  data() {
    return {
      counter: 40,
      name: '',
      confirmedName: ''
    };
  },
  methods:{
    confirmInput(){
      this.confirmedName = this.name;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    addCounter(number){
      this.counter = this.counter + number;
    },
    submitForm(event){
      alert('Lets o !')
    }
  }
});

app.mount('#events');
