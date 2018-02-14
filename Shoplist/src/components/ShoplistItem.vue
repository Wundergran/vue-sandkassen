<template>
    <div class="listItem">
        <div class="md-subheading name">{{item.name}}</div>
        <div class="md-subheading amount">{{item.amount}}</div>
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
        width: 100%;
    }
    .amount {
        justify-content: flex-end;
    }
</style>