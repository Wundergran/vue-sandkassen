<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
export default {
  name: 'App',
  data: function() {
      return {
        user: {}
      }
  }
}

// Initialize Firebase
var firebase = require('firebase');
var config = {
  apiKey: 'AIzaSyBwPIvauRFSUOCdPqYfk-MXnItL_dRjBgY',
  authDomain: 'shoplist-2f2a0.firebaseapp.com',
  databaseURL: 'https://shoplist-2f2a0.firebaseio.com',
  projectId: 'shoplist-2f2a0',
  storageBucket: 'shoplist-2f2a0.appspot.com',
  messagingSenderId: '275802183767'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            console.log(user.displayName + " " + user.email)
            this.user = user
          }
})
var database = firebase.database

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
