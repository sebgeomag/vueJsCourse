const app = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            user1: false,
            user2: false
        }
    },
    methods:{
        boxSelected(box){
            if(box === 'A'){
                this.boxASelected = !this.boxASelected;
            }else if(box === 'B'){
                this.boxBSelected = !this.boxBSelected;
            }else if(box === 'C'){
                this.boxCSelected = !this.boxCSelected;
            }
        },
        setInputAsClass(evt){
            if(evt.target.value==="user1"){
                this.user1 = true;
                this.user2 = false;
            }else if(evt.target.value==="user2"){
                this.user2 = true;
                this.user1 = false;
            }
        }
    }
});

app.mount("#assignment");