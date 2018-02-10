<template>
  <div class="login">
      <h3>Sign in</h3>
      <input type="text" placeholder="Email"><br>
      <input type="password" placeholder="Password"><br>
      <Button>Login</Button>
  </div>
</template>

<script>
    export default {
        name: 'login',
        data: function() {
            return{}
        },
        methods: {}
    }

    // FirebaseUI config.
    var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var firebase = require('firebase');
    var firebaseui = require('firebaseui');
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
</script>