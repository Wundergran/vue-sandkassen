<template>
    <div id="CardsView">
        <div v-for="(ref, i) in refList" :key="i">
            <ShoplistCard  v-bind:dataset="ref"></ShoplistCard>
        </div>
    </div>
</template>

<script>
    import ShoplistCard from './ShoplistCard.vue'
    import Vue from 'vue'
    import { userdb } from '../firebase.js'

    export default {
        name: 'CardsView',
        data: function() {
            return {
                user: {},
                shoplistRefs: null
            }
        },
        firebase: {
            shoplistRefs: userdb
        },
        computed: {
            refList: function(){
                if(this.shoplistRefs){
                    console.log(this.shoplistRefs)
                    console.log(userdb)
                    return this.shoplistRefs
                }else{
                    return null
                }
            }
        },
        components: {
            ShoplistCard
        }
    }
</script>

<style scoped>

</style>