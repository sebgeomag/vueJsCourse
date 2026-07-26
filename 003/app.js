const app = Vue.createApp({
    data() {
        return {
            myName: "Sebastian",
            myAge: 44,
            randomNumber: Math.random(),
            courseGoalA: "<h3>Blubb</h3>",
            courseGoalB: "Become Vue Master",
            vueLink: "https://media.istockphoto.com/id/816752606/de/foto/tv-testkarte-oder-testmuster-generisch.jpg?s=1024x1024&w=is&k=20&c=_t7toofVhbQ5K_l7TxyPGh7GtUDVuhCmvtn1G5K4E2k=",
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