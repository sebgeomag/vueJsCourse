const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      myName: ""
    };
  },
  methods: {
    increment(){
      this.counter++;
    },
    decrement(){
      this.counter--;
    },
    setName(event, lastname){
      this.myName = event.target.value + ' ' + lastname;
    },
    clickTheButton(){
      //event.preventDefault();
      alert('Clicked the button...');
    }
  }
});

app.mount('#events');
