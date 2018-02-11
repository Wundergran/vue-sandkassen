<template>
    <div id="CardsView">
        <div class="card-container" v-for="ref in shoplistRefs" :key="ref">
            <ShoplistCard v-bind:dataset="ref"></ShoplistCard>
        </div>
        
    </div>
</template>

<script>
import ShoplistCard from './ShoplistCard.vue'

var Vue = require('vue')
var firebase = require('firebase')
export default {
    name: 'CardsView',
    data: function() {
        return {
            user: {},
            shoplistRefs: []
        }
    },
    components: {
        ShoplistCard
    }
}

firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            console.log(user.displayName + " " + user.email)
            this.user = user
          }
})
var listRef = firebase.database().ref('users/' + this.user + '/shoplists')
listRef.on('value', function(snapshot) {
  //updateStarCount(postElement, snapshot.val());
  this.shoplistRefs = snapshot.val
  console.log('Set value for user: ' + snapshot.val)
});

</script>

<style scoped>

</style>