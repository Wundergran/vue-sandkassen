<template>
  <div id="shoplist-card">
    <div class="card md-elevation-5">
      <h3>{{listData}}</h3>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'ShoplistCard',
  props: ['dataset'],
  data: function() {
    return {
      dbData: {}
    }
  },
  computed: {
    listData: function() {
      console.log(this.dataset)
      return this.dataset
    }
  },
}
</script>

<style scoped>
  .card{
    min-height: 50px;
    max-width: 200px;

    border-radius: 3px;
    padding: 16px;
  }
</style>
