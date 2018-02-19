<template>
  <div id="app" class="page-container">
    <v-app>
      <Header v-on:login="logIn" v-on:logout="logOut" v-bind:user="user"></Header>

      <div class="content">
        <v-layout justify-center>
          <v-flex>
            <CardsView v-bind:dataRefs="db"></CardsView>
          </v-flex>
          <LoginDialog class="login-dialog" v-bind:show="loginDia.show"></LoginDialog>
          <v-dialog v-model="newDia.show" max-width="500px">
            <NewCardDialog v-on:submitlist="addList($event)"></NewCardDialog>
          </v-dialog>
        </v-layout>
      </div>

      <v-btn fab @click.stop="newDia.show = true" color="accent" right bottom fixed>
        <v-icon>add</v-icon>
      </v-btn>


      <v-snackbar
        :timeout="snackConf.dur"
        :left="true"
        v-model="snackConf.show">Greets to you, {{user.displayName}}
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
    primary: "#00897B",
    secondary: "#00796B",
    accent: "#1DE9B6",
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
        database.ref(this.db.userdbStr).child(shoplistRefKey).set('true')
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
            console.log(user)
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
