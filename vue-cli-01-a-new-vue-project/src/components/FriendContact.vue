<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)':'' }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="toggleFavorite">Favorit setzen</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete',id)">Delete Friend</button>
    </li>
</template>

<script>
    export default {
        props: {
            id:{
                type: String,
                required: true
            },  
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            },
            emailAddress: {
                type: String,
                required: true
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false,
                /*validator: function(value){
                    return value==="1" || value==="0";
                }*/
            }
        },
        emits: ['toggle-favorite,delete'],
        data(){
            return {
                detailsAreVisible: false,
            }
        },
        methods:{
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite(){
                //emit transfers Data from child component (FriendContact) 
                // to parent component (App)
                this.$emit('toggle-favorite',this.id); //must always be kebap-case
            },
        }
    };
</script>