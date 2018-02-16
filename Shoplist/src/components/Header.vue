<template>
    <v-toolbar color="primary">
        <v-toolbar-title class="white--text">Shoplist</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <div class="user-container" v-if="loggedIn" v-on:click="logout">
                <div class="user-text">{{user.displayName}}</div>
                <img class="profile-photo" v-bind:src="user.photoURL">
            </div>
            <div v-else>
                <v-btn v-on:click="login">LOG IN</v-btn>
            </div>
        </div>
        
    </v-toolbar>
</template>

<script>
import { firebase } from '../firebase.js'
export default {
    name: 'Header',
    props: [
      'user'
    ],
    computed: {
        loggedIn: function() {
            return this.user.displayName !== undefined
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut()
        },
        login: function() {
            firebase.auth().signInWithPopup()
        }
    }
}
</script>

<style scoped>
    .user-container{
        display: flex;
        flex-direction: row;
        height: inherit;
        margin: auto;
    }
    .user-text{
        margin: auto;

        color: white;
    }
    .profile-photo{
        object-fit: contain;
        width: 24px;
        margin: 8px;
    }
</style>
