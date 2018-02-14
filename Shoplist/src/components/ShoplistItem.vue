<template>
  <div id="listItem">
      <div v-if="edit">
          <div class="text">{{item.name}}</div>
          <div class="text">{{item.amount}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'shoplist-item',
    props: ['item', 'edit'],
}
</script>

<style>
    .listItem{
        display: flex;
        flex-direction: row;
    }
</style>