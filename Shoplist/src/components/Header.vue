<template>
    <v-toolbar color="primary" prominent="true">
        <v-toolbar-title class="white--text title-text">Shoplist</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <div class="user-container" v-if="loggedIn" v-on:click="logout">
                <div class="user-text">{{user.displayName}}</div>
                <img class="profile-photo" v-bind:src="user.photoURL">
            </div>
            <div v-else>
                <v-btn v-on:click="login">LOGIN</v-btn>
            </div>
        </div>
        
    </v-toolbar>
</template>

<script>
import { firebase, loginConfig } from '../firebase.js'
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
            this.$emit('login')
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
        width: 24px;
        height: 24px;
        margin: 8px;
    }
    .title-text{
        font-weight: 400;
    }
</style>
