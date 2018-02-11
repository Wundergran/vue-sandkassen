<template>
    <div id="CardsView">
        <div v-for="ref in refList" :key="ref">
            <ShoplistCard  v-bind:dataset="ref"></ShoplistCard>
        </div>
    </div>
</template>

<script>
    import ShoplistCard from './ShoplistCard.vue'
    import { data } from '../firebase.js'

    var Vue = require('vue')

    export default {
        name: 'CardsView',
        data: function() {
            return {
                user: {},
                shoplistRefs: {}
            }
        },
        firebase: {
            shoplistRefs: data.listRef
        },
        computed: {
            refList: function(){
                console.log(this.shoplistRefs)
                console.log(data.listRef)
                return Object.keys(this.shoplistRefs)
            }
        },
        components: {
            ShoplistCard
        }
    }
</script>

<style scoped>

</style>