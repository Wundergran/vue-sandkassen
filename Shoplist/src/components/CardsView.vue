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
    import { database } from '../firebase.js'

    export default {
        name: 'CardsView',
        props: [
            'dataRefs'
        ],
        data: function() {
            return {
                user: {},
                shoplistRefs: {},
            }
        },
        firebase: {
            shoplistRefs: database.ref(this.userdbRef)
        },
        computed: {
            refList: function(){
                if(this.shoplistRefs){
                    var keys = []
                    for (ref in this.shoplistRefs){
                        keys.push(ref.key)
                    }
                    console.log(keys)
                    return keys
                }
            },
            userdbRef: function() {
                if(this.dataRefs.userdbStr !== undefined){
                    return this.dataRefs.userdbStr
                }else{
                    return ''
                }
            }
        },
        watch: {
            dataRefs: {
                deep: true,
                handler: function(newdb, olddb) {
                    console.log('database changed')
                    if(olddb.userdbStr){
                        
                    }
                    
                    if(newdb.userdbStr){
                        /* database.ref(newdb.userdbStr).on('value', function(snapshot){
                            setShoplistRefs(snapshot.val())
                            console.log('data got')
                        }) */
                        //this.userdbRef = database.ref(newdb.userdbStr)
                    }
                }
            },
            shoplistRefs: function(val){
                console.log('shoplistRefs changed')
            }
        },
        components: {
            ShoplistCard
        }
    }
</script>

<style scoped>

</style>