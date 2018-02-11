import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

var config = {
    apiKey: 'AIzaSyBwPIvauRFSUOCdPqYfk-MXnItL_dRjBgY',
    authDomain: 'shoplist-2f2a0.firebaseapp.com',
    databaseURL: 'https://shoplist-2f2a0.firebaseio.com',
    projectId: 'shoplist-2f2a0',
    storageBucket: 'shoplist-2f2a0.appspot.com',
    messagingSenderId: '275802183767'
}

var usr = {}
var userdb = {}
var shoplistdb = {}

var firebase = Firebase.initializeApp(config);
var database = firebase.database()
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        usr = user
        userdb = database.ref(`users/${user.uid}/shoplists`)
        shoplistdb = database.ref('shoplists')
        console.log(user.uid)
    }
})

export { usr, userdb, shoplistdb }