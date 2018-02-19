<template>
    <div>
        <div class="listItem" v-if="edit">
            <v-text-field class="name edit" v-model="item.name" label="Item name" single-line></v-text-field>
            <v-text-field class="amount edit" v-model="item.amount" label="Amount" single-line></v-text-field>
        </div>
        <div class="listItem" v-else>
            <div class="name flex body-2">{{item.name}}</div>
            <div class="amount body-1">{{item.amount}}</div>
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
    .listItem {
        display: flex;
        flex-direction: row;
        margin: 4px 0;
    }
    .name {
        display: flex;
        justify-content: flex-start;
    }
</style>