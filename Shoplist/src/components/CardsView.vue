<template>
    <div id="card-container">
        <ShoplistCard data="sample"></ShoplistCard>
    </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>