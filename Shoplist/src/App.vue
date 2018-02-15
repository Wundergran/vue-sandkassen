<template>
  <div id="app" class="page-container">
    <v-app>
      <v-toolbar color="primary">
        <v-toolbar-title class="white--text">Shoplist</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

        <div class="content">
          <CardsView v-bind:dataRefs="db"></CardsView>
        </div>

      <v-snackbar
        :timeout="snackConf.dur"
        :left="true"
        v-model="snackConf.show"
      >Greetings, {{user.displayName}}</v-snackbar>
    </v-app>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'

import Vue from 'vue'
import Vuetify from 'vuetify'
import CardsView from './components/CardsView.vue'

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
    CardsView
  },
  data: function() {
    return{
      user: {},
      db: {},
      snackConf: {
        show: false,
        pos: "left",
        dur: 3000
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
    max-width: 1000px;
    margin: auto;
  }
  .toolbar-span{
    width: 100%
  }
</style>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
</style>
