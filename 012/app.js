const app = Vue.createApp({
  data(){
    return{
      friends: [
        {

        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '98765 43210',
          email: 'julie@localhost.de'
        }]
      }
    },
});

//Components sollte immer ein "-" im Namen haben
app.component('friend-contact',{
  template: `        
  <li >
          <h2>{{friend.name}}</h2>
          <button @click="toogleDetails()">
            {{ detailsAreVisible ? 'Hide' : 'Show' }}
          </button>
            
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li>`,
  data(){
    return{
      detailsAreVisible: false,
      friend:{id:'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 56780',
          email: 'manuel@localhost.de'}
    };
  },
  methods: {
    toogleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  }
});

app.mount("#app");