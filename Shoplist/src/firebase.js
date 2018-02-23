import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

const config = {
    apiKey: 'AIzaSyBwPIvauRFSUOCdPqYfk-MXnItL_dRjBgY',
    authDomain: 'shoplist-2f2a0.firebaseapp.com',
    databaseURL: 'https://shoplist-2f2a0.firebaseio.com',
    projectId: 'shoplist-2f2a0',
    storageBucket: 'shoplist-2f2a0.appspot.com',
    messagingSenderId: '275802183767'
}

const loginConfig = {
    signInSuccessUrl: '/',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            Firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
}

const listRef = 'shoplists'
const firebase = Firebase.initializeApp(config)
var database = firebase.database()

export { data, firebase, Firebase, config, 
        database, listRef, loginConfig }