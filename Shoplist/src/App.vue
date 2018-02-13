<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <CardsView v-bind:dataRefs="db"></CardsView>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import Vue from 'vue'
import CardsView from './components/CardsView.vue'
import { firebase, database } from './firebase.js'

export default {
  name: 'App',
  components: {
    CardsView
  },
  data: function() {
    return{
      user: {},
      db: {}
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
</style>