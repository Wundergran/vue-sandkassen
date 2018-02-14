<template>
  <div id="shoplist-card">
    <div class="card md-elevation-5">
      <h2 class="md-headline title">{{listData.title}}</h2>
      <div v-for="item in listData.items" :key="item.name">
        <ShoplistItem v-bind:item="item" v-bind:edit="edit"></ShoplistItem>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ShoplistItem from './ShoplistItem.vue'
  import { database, listRef } from '../firebase.js'

  export default {
    name: 'ShoplistCard',
    components: {
      ShoplistItem
    },
    props: ['dataset'],
    data: function() {
      return {
        listData: {},
        edit: false
      }
    },
    computed: {
      dataref: function() {
        var data = this.dataset
        return database.ref(listRef).child(data['.key'])
      }
    },
    created: function() {
      this.$bindAsObject('listData', this.dataref)
    }
  }
</script>

<style scoped>
  .card{
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    padding: 16px;

    background: white;
  }
</style>
