<template>
    <div id="CardsView">
        <div class="cards-container" v-for="item in shoplistRefs" :key="item['.key']">
            <ShoplistCard class="card" v-bind:dataset="item"></ShoplistCard>
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
    .cards-container{
        flex-direction: row
    }
    .card{
        flex: auto;
        max-width: 500px;
    }
</style>