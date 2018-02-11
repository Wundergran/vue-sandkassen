<template>
    <div id="CardsView">
    
        <ShoplistCard v-for="ref in shoplistRefs" :key="ref" v-bind:dataset="ref"></ShoplistCard>
        
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
            shoplistRefs: {}
        }
    },
    components: {
        ShoplistCard
    }
}

firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            this.user = user

            var listRef = firebase.database().ref('users/' + this.user.uid + '/shoplists')
            var self = this
            listRef.on('value', function(snapshot) {
                self.set(self.shoplistRefs, snapshot.val())
                //self.shoplistRefs = snapshot.val()
                console.log(snapshot.val())
            });
          }
})


</script>

<style scoped>

</style>