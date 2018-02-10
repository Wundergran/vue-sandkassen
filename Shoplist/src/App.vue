<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

// Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBwPIvauRFSUOCdPqYfk-MXnItL_dRjBgY',
    authDomain: 'shoplist-2f2a0.firebaseapp.com',
    databaseURL: 'https://shoplist-2f2a0.firebaseio.com',
    projectId: 'shoplist-2f2a0',
    storageBucket: 'shoplist-2f2a0.appspot.com',
    messagingSenderId: '275802183767'
  };
  firebase.initializeApp(config);

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
