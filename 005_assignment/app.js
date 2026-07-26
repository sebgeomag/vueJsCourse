const app = Vue.createApp(
    {
  data() {
    return {
        userInput: ''
    };
  },
  methods: {
    showAlertOnButtonClick(){
        alert("Button was clicked");
    },
    updateUserInputOnKeydown(event){
        this.userInput = event.target.value;
        console.log(userInput);
    },
    enterClicked(){
        console.log("Enter clicked");
    }
  }
});

app.mount("#assignment");