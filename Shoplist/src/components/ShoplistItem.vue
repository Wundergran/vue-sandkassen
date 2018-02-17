<template>
    <div class="listItem">
        <div v-if="edit">
            <v-text-field class="name" v-model="item.name"></v-text-field>
            <v-text-field class="amount" v-model="item.amount"></v-text-field>
        </div>
        <div v-else>
            <div class="name flex">{{item.name}}</div>
            <div class="amount">{{item.amount}}</div>
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
    }
    .name {
        display: flex;
        justify-content: flex-start;
    }
    .amount {

    }
</style>