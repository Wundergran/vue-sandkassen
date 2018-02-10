<template>
    <div id="CardsView">
        <ShoplistCard v-bind:dataset="sample"></ShoplistCard>
    </div>
</template>

<script>
import ShoplistCard from './ShoplistCard.vue'

var Vue = require('vue')
var firebase = require('firebase')
export default {
  name: 'CardsView',
  data: function() {
      return {
          sample: {
              color: 0,
              completed: {
                  type: Boolean,
                  value: false
              },
              items: [
                  {
                      amount: 200,
                      name: "test",
                      collected: false
                  },
                  {
                      amount: 200,
                      name: "test",
                      collected: false
                  },
                  {
                      amount: 200,
                      name: "test",
                      collected: false
                  }
              ],
              title: "Some title"
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