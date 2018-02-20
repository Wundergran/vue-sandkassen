<template>
    <v-toolbar color="primary" prominent extended>
        <v-toolbar-title class="white--text title-text">Shoplist</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <v-btn class="user-container" v-if="loggedIn" flat v-on:click="logout">
                <div class="user-text subheading">{{user.displayName}}</div>
                <img class="profile-photo" v-bind:src="user.photoURL">
            </v-btn>
            <div v-else>
                <v-btn v-on:click="login">LOGIN</v-btn>
            </div>
        </div>
        <v-btn fab @click.stop="showNewDia" color="accent" right bottom absolute>
            <v-icon>add</v-icon>
        </v-btn>
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
            this.$emit('logout')
        },
        login: function() {
            this.$emit('login')
        },
        showNewDia: function() {
            this.$emit('new-list')
        }
    }
}
</script>

<style scoped>
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
