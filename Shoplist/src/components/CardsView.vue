<template>
    <div id="CardsView" class="cards-container">
        <ShoplistCard v-for="item in shoplistRefs" :key="item['.key']"
            class="shoplist-card flex" v-bind:dataset="item" v-on:delete-card="removeList($event)"></ShoplistCard>
        
        <v-snackbar
        :timeout="snackConf.dur" :left="true" v-model="snackConf.show">
            {{snackConf.msg}}
            <v-btn @click.native="undoLastRemove" color="secondary" dark flat>Undo</v-btn>
      </v-snackbar>
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
                userdbRef: {},
                shoplistRefs: [],
                lastRemovedKey: '',
                snackConf: {
                    show: false,
                    dur: 5000,
                    msg: 'List was removed'
                }
            }
        },
        watch: {
            dataRefs: function() {
                const str = this.dataRefs.userdbStr
                if(str !== undefined) {
                    this.userdbRef = database.ref(str)
                    this.$bindAsArray('shoplistRefs', database.ref(str))
                }
            }
        },
        methods: {
            removeList: function(listKey) {
                this.userdbRef.child(listKey).remove()
                this.lastRemovedKey = listKey
                this.snackConf.show = true
            },
            undoLastRemove: function() {
                this.userdbRef.child(this.lastRemovedKey).set(true)
                this.snackConf.show = false
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
        margin: auto;
    }
    .shoplist-card{
        max-width: 400px;
        min-width: 200px;
        max-height: 500px;
        margin: 4px;
    }
</style>