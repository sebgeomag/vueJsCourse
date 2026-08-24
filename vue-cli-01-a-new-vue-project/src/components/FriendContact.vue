<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite==="1" ? '(Favorite)':'' }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="toggleFavorite">Favorit setzen</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        props: {
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
                type: String,
                required: false,
                default: '0'
            }
        },
        data(){
            return {
                detailsAreVisible: false,
                friend: {
                    id: 'manuel',
                    name: 'Manuel Lorenzo',
                    phone: '01234 43221',
                    email: 'manuel@localhost.com'
                },
                friendIsFavorite: this.isFavorite,
            }
        },
        methods:{
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite(){
                if(this.friendIsFavorite === "0"){
                    this.friendIsFavorite = "1";
                }else{
                    this.friendIsFavorite = "0";
                }
            }
        }
    };
</script>