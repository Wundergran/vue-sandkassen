<template>
    <div class="listItem">
        <div class="name flex">{{item.name}}</div>
        <div class="amount">{{item.amount}}</div>
    </div>
</template>

<script>
export default {
    name: 'shoplist-item',
    props: ['item', 'edit'],
}
</script>

<style>
    .listItem {
        display: flex;
        flex-direction: row;
    }
    .name {
        display: flex;
        justify-content: flex-start;
    }
    .amount {

    }
</style>