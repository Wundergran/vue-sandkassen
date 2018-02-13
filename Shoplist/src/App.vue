<template>
  <div id="app" class="page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <span class="md-title">My Title</span>
        </div>
      </md-app-toolbar>
      
      <md-app-content>
        <img src="./assets/logo.png">
        <router-view/>
        <CardsView v-bind:dataRefs="db"></CardsView>
      </md-app-content>
    </md-app>
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
    CardsView,
    MdApp,
    MdToolbar,
    MdAppContent
  },
  data: function() {
    return{
      user: {},
      db: {},
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
            console.log('User: ' + user.displayName)
        }
    })    
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>