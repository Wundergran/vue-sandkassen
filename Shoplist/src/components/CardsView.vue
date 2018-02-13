<template>
    <div id="CardsView">
        <div v-bind:v-for="ref in shoplistRefs">
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
                    for (val in this.shoplistRefs){
                        keys.push(val.key)
                    }
                    return keys
                }
            },
            userdbRef: function() {
                console.log(this.dataRefs.userdbStr)
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
                console.log(val)
            }
        },
        components: {
            ShoplistCard
        }
    }
</script>

<style scoped>

</style>