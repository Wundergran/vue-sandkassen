<template>
  <div class="card">
    <h2 class="title">{{listData.title}}</h2>
    <div class="items">
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
  .title {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .card {
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    padding: 0 16px;
    background-color: white;
  }
  .items{
    margin-bottom: 16px;
  }
</style>
