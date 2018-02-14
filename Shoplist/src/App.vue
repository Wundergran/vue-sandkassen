<template>
  <div id="app" class="page-container">
    <md-app md-waterfall md-mode="reveal">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <span class="md-title">Shoplist</span>
        </div>
      </md-app-toolbar>
      
      <md-app-content class="content">
        <CardsView v-bind:dataRefs="db"></CardsView>
      </md-app-content>
    </md-app>
    
    <md-snackbar :md-position="snackConf.pos" :md-duration="snackConf.dur" :md-active.sync="snackConf.show" md-persistent>
        <span >Welcome, {{user.displayName}}</span>
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
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: grey;
  }
  .content {
    background-color: #2c3e50;
    max-width: 1000px;
    margin: auto;
  }
  .toolbar-span{
    width: 100%
  }
</style>

<style lang="sass" scoped>
@import "~vue-material/dist/theme/engine"; 
@include md-register-theme("default", (primary: md-get-palette-color(teal, 700), accent: md-get-palette-color(pink, 500)));
@import "~vue-material/dist/theme/all";

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
</style>
