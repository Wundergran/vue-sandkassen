<template>
  <div id="app" class="page-container">
    <v-app>
      <Header v-on:login="logIn" v-on:logout="logOut" v-on:new-list="newDia.show = true" v-bind:user="user"></Header>

      <v-content class="content">
        <v-layout justify-center>
          <v-container>
            <CardsView v-bind:dataRefs="db"></CardsView>
          </v-container>
          <LoginDialog class="login-dialog" v-bind:show="loginDia.show"></LoginDialog>
          <v-dialog v-model="newDia.show" max-width="500px">
            <NewCardDialog v-on:submitlist="addList($event)"></NewCardDialog>
          </v-dialog>
        </v-layout>
      </v-content>

      <v-snackbar
        :timeout="snackConf.dur"
        :left="true"
        v-model="snackConf.show">{{snackGreet}}
      </v-snackbar>
    </v-app>
  </div>
</template>

<script>

import Vue from 'vue'
import Vuetify from 'vuetify'

import Header from './components/Header.vue'
import CardsView from './components/CardsView.vue'
import LoginDialog from './components/LoginDialog.vue'
import NewCardDialog from './components/NewCardDialog.vue'

import { firebase, database } from './firebase.js'

Vue.use(Vuetify, {
  theme: {
    primary: "#6A1B9A",
    secondary: "#CE93D8",
    accent: "#E040FB",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
})

export default {
  name: 'App',
  components: {
    CardsView,
    Header,
    LoginDialog,
    NewCardDialog
  },
  data: function() {
    return{
      user: {},
      db: {},
      snackConf: {
        show: false,
        pos: "left",
        dur: 3000
      },
      loginDia: {
        show: false
      },
      newDia: {
        show: false
      }
    }
  },
  computed: {
    snackGreet: function(){
      if(this.user.displayName === undefined || this.user.displayName === null){
        return 'Greetings to you, Anonymous'
      }else{
        return 'Greetings to you, ' + this.user.displayName
      }
    }
  },
  methods: {
    logIn: function() {
      this.loginDia.show = true
    },
    logOut: function() {
      firebase.auth().signOut()
      this.user = {}
    },
    addList: function(event) {
      var list = {
        title: event.title,
        items: event.items,
        completed: event.completed
      }
      if(this.db !== {}){
        var shoplistRefKey = database.ref(this.db.shoplistdbStr).push().key
        database.ref(this.db.shoplistdbStr).child(shoplistRefKey).set(list)
        database.ref(this.db.userdbStr).child(shoplistRefKey).set(true)
      }
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.user = user
            var db = {}
            db.userdbStr = (`users/${user.uid}/shoplists`)
            db.shoplistdbStr = ('shoplists')
            this.db = db
            this.snackConf.show = true
        }else{
          firebase.auth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        }
    })    
  }
}
</script>

<style>
  :root {
    --background-color: #ECEFF1;
  }
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .content {
    max-width: 900px;
    margin: auto;
  }
  .toolbar-span{
    width: 100%
  }
</style>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
</style>
