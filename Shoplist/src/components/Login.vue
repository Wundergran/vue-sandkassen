<template>
  <div id="firebaseui-auth-container" class="login">
      
  </div>
</template>

<script>
    import { Firebase } from '../firebase.js'
    var firebaseui = require('firebaseui');

    // FirebaseUI config.
    var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            Firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
    }

    export default {
        name: 'login',
        data: function() {
            return{}
        },
        created: function(){
            // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(Firebase.auth());
            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }
</script>

<style scoped>
    .login {
        height: 32px;
    }
</style>
