<template>
  <div id="app" class="page-container">
    <v-app>
      <Header></Header>

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

import Header from './components/Header.vue'
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
    CardsView,
    Header
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
    display: flex;
    max-width: 1200px;
    margin: auto;
  }
  .toolbar-span{
    width: 100%
  }
</style>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
</style>
