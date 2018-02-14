<template>
  <div id="app" class="page-container">
    <md-app md-waterfall md-mode="reveal">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <span class="md-title">My Title</span>
        </div>
      </md-app-toolbar>
      
      <md-app-content class="content">
        <img src="./assets/logo.png">
        <CardsView v-bind:dataRefs="db"></CardsView>
      </md-app-content>
    </md-app>
    
    <md-snackbar :md-position="left" :md-duration="3000" :md-active.sync="showSnackbar" md-persistent>
        <span>Welcome, {{user.displayName}}</span>
    </md-snackbar>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'

import Vue from 'vue'
import VueMaterial from 'vue-material'
import CardsView from './components/CardsView.vue'

import { firebase, database } from './firebase.js'

Vue.use(VueMaterial)

export default {
  name: 'App',
  components: {
    CardsView
  },
  data: function() {
    return{
      user: {},
      db: {},
      showSnackbar: false
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
            this.showSnackbar = true
        }
    })    
  }
}
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .md-app {
    border: 1px solid rgba(#000, .12);
  }
</style>

<style lang="sass" scoped>
@import "~vue-material/dist/theme/engine"; 
@include md-register-theme("default", (primary: md-get-palette-color(teal, 700), accent: md-get-palette-color(pink, 500)));
@import "~vue-material/dist/theme/all";

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
</style>
