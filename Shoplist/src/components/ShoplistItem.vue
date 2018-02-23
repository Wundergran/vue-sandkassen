<template>
    <div>
        <div class="listItem" v-if="edit">
            <v-text-field class="edit-name" v-model="item.name" label="Item name" single-line></v-text-field>
            <v-text-field class="edit-amount" v-model="item.amount" label="Amount" single-line></v-text-field>
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
    watch: {
        edit: function(val) {
            if(!val){
                this.$emit('input', this.item)
            }
        }
    }
}
</script>

<style>
    .listItem {
        display: flex;
        flex-direction: row;
        margin: 4px 0;
        max-height: 32px;
    }
    .name {
        margin-right: 8px;
    }
    .edit-amount {
        max-width: 100px;
        margin-left: 8px;
    }
    amount {
        max-width: 100px;
    }
</style>