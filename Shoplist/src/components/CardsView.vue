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
            }
        },
        watch: {
            dataRefs: function() {
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