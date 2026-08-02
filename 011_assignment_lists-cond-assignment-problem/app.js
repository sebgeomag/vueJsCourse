const app = Vue.createApp({
    data() {
        return { 
            tasks: [] ,
            inputText: '',
            isVisible: true,
            visibilityText: 'Hide List'
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.inputText);
            this.inputText = '';
        },
        toggleVisibility(){
            if(this.isVisible){
                this.isVisible = false;
                this.visibilityText = "Show";
            }else{
                this.isVisible=true;
                this.visibilityText = "Hide";
            }
        }
    }
});

app.mount('#assignment');