<template>
    <div id="CardsView" class="cards-container">
            <ShoplistCard v-for="item in shoplistRefs" :key="item['.key']"
             class="card" v-bind:dataset="item"></ShoplistCard>
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
    .cards-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .card{
        max-width: 500px;
        min-width: 300px;
        max-height: 500px;
        margin: 4px;
    }
</style>