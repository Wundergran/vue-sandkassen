<template>
  <v-card class="card" hover>
    <div class="top">
      <div class="title">{{listData.title}}</div>
      <span class="flex"></span>
      <v-btn class="top-icon" v-on:click="edit = !edit" flat icon>
        <v-icon class="top-icon" >edit</v-icon>
      </v-btn>
      <v-btn class="top-icon" flat icon>
        <v-icon class="top-icon" >more_vert</v-icon>
      </v-btn>
    </div>
    
    <div class="items">
      <div class="card-subhead">
        <div class="flex subheading">Item</div>
        <div class="subheading">Amount</div>
      </div>
      <hr>
      <div v-for="item in listData.items" :key="item.name">
        <ShoplistItem v-bind:item="item" v-bind:edit="edit"></ShoplistItem>
      </div>
    </div>
  </v-card>
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
  .card {
    flex-direction: column;
    border-radius: 2px;
    padding: 8px 16px 16px 16px;
    background-color: white;
  }
  .top {
    display: flex;
    flex-direction: row;
    
  }
  .title {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .top-icon {
    height: 36px;
    width: 36px;
    margin: 0;
    padding: 0;
  }
  .items{
    margin-bottom: 16px;
  }
  .card-subhead {
    display: flex;
    flex-direction: row;
  }
</style>