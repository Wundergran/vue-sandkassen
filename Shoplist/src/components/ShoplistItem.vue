<template>
    <div class="listItem">
        <div class="name">{{item.name}}</div>
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
        margin-bottom: 16px;
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