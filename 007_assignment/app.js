const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            resultText: "Result: RESULT"
        }
    },
    watch: {
        counter(newValue, oldValue){
            if(newValue===37){
                that = this;
                setTimeout(function(){
                    that.counter = 0;
                    console.log("Fäddich");
                },5000)
            }
        }
    },
    methods: {
        addNumber(numberToAdd){
            this.counter= this.counter+numberToAdd;
            if(this.counter < 37){
                this.resultText = "Not there yet";
            }else if(this.counter > 37){
                this.resultText = "Too much!"
            }
            console.log(this.counter);
        }
    }
});

app.mount("#assignment");