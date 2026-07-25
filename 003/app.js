const app = Vue.createApp({
    data() {
        return {
            myName: "Sebastian",
            myAge: 44,
            myAgePlusFive: myAge+5,
            randomNumber: Math.random(),
            courseGoalA: "<h3>Blubb</h3>",
            courseGoalB: "Become Vue Master",
            vueLink: "https://www.google.de",
        }
    },
    methods: {
        myFunction: function(){
            alert("Alerting the User");
        },
        doSomething(){
            alert("Do something");
        },
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#assignment');