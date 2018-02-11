<template>
    <div id="CardsView">
    <div v-for="ref in shoplistRefs" :key="ref">
        <ShoplistCard  v-bind:dataset="ref"></ShoplistCard>
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
    created: function() {
        /* firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                this.user = user
                var listRef = firebase.database().ref('users/' + this.user.uid + '/shoplists')
                listRef.on('value', function(snapshot) {
                    var listArray = Object.keys(snapshot.val())
                    this.shoplistRefs = listArray
                    console.log(listArray)
                })
            }
        }) */
    },
    components: {
        ShoplistCard
    }
}


</script>

<style scoped>

</style>