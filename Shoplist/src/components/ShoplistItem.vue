<template>
  <div id="listItem">
    <div class="text">{{item.name}}</div>
    <div class="text">{{item.amount}}</div>
  </div>
</template>

<script>
export default {
    name: 'shoplist-item',
    props: ['item', 'edit'],
    created: function() {
        console.log('item created, ' + this.item.name + this.item.amount)
    }
}
</script>

<style>
    .listItem{
        flex-direction: row;
    }
</style>