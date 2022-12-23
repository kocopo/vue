const app = Vue.createApp({
  data() {
    return {
      counter: 40,
      name: '',
      lastName: ''
    };
  },
  watch:{
    counter(value){
      if(this.counter === 50){
        this.counter = 0;
      }
    }
  },
  computed:{
    fullname(){
      if(this.name === '' || this.lastName == ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods:{

    setName(event, lastName){
      this.name = event.target.value;
    },
    addCounter(number){
      this.counter = this.counter + number;
    },
    submitForm(event){
      alert('Lets go !')
    },
    resetInput(){
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');