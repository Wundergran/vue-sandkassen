<template>
    <div id="CardsView">
        <div v-for="item in shoplistRefs" :key="item['.key']">
            <ShoplistCard  v-bind:dataset="item"></ShoplistCard>
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
                shoplistRefs: [],
                userdbStr: 'shoplists',
                userdbRef: {}
            }
        },
        firebase: {
            //shoplistRefs: this.userdbRef
        },
        computed: {
            refList: function(){
                if(this.shoplistRefs){
                    var copy = this.shoplistRefs
                    var keys = []
                    for (var item in copy) {
                        if(item !== undefined){
                            keys.push(item['.key'])
                            console.log(item)
                        }
                    }
                    console.log('keys: ' + keys)
                    return keys
                }
            }
        },
        watch: {
            shoplistRefs: function(val){
                /* console.log('shoplistRefs changed')
                console.log(val) */
            },
            dataRefs: function() {
                console.log('database changed: ' + this.dataRefs.userdbStr)
                const str = this.dataRefs.userdbStr
                if(str !== undefined){
                    this.userdbRef = database.ref(str)
                    this.$bindAsArray('shoplistRefs', database.ref(str))
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