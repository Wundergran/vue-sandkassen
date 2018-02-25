<template>
  <v-card class="card" hover>
    <div class="top">
      <div class="title">{{listData.title}}</div>
      <span class="flex"></span>
      <v-btn class="top-icon" v-on:click="edit = !edit" flat icon>
        <v-icon class="top-icon" >edit</v-icon>
      </v-btn>
      <v-menu>
        <v-btn class="top-icon" flat icon slot="activator">
          <v-icon class="top-icon" >more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title @click.stop="deleteCard" id="delete">DELETE</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
    
    <div class="items">
      <div class="card-subhead">
        <div class="flex subheading">Item</div>
        <div class="subheading">Amount</div>
      </div>
      <hr>
      <div v-for="(value, key) in listData.items" :key="key">
        <ShoplistItem :item="value" :edit="edit" :key="key" v-on:item-updated="updateItem($event)"></ShoplistItem>
      </div>
    </div>
    <v-card-actions class="buttons" v-if="edit">
      <v-btn color="secondary" flat @click.stop="edit = false">Cancel</v-btn>
      <v-btn v-on:click="updateList" class="action-primary" color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import Vue from 'vue'
  import ShoplistItem from './ShoplistItem.vue'
  import { database, listRef, firebase } from '../firebase.js'

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
    methods: {
      updateList: function() {

      },
      deleteCard: function() {
        this.$emit('delete-card', this.dataset['.key'])
      },
      updateItem: function(item) {
        console.log(item)
      }
    },
    created: function() {
      this.$bindAsObject('listData', this.dataref)
      /* this.dataref.on('value', function(snapshot) {
        var list = {}
        list.title = snapshot.child('title').val()
        list.completed = snapshot.child('completed').val()
        list.color = snapshot.child('color').val()
        list.items = snapshot.child('items').val()

        this.listData = list
      }) */
    }
  }
</script>

<style scoped>
  .card {
    flex-direction: column;
    border-radius: 2px;
    padding: 8px 16px 16px 16px;
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
  .buttons {
    justify-content: flex-end;
  }
  .card-subhead {
    display: flex;
    flex-direction: row;
  }
  
  #delete {
    color: red
  }

</style>