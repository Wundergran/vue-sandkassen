<template>
    <div>
        <div class="listItem" v-if="edit">
            <v-text-field class="edit-name" v-model="item.name" label="Item name" single-line></v-text-field>
            <v-text-field class="edit-amount" v-model="item.amount" label="Amount" single-line></v-text-field>
        </div>
        <div class="listItem" v-else>
            <v-checkbox class="checkbox" v-model="collected" hide-details></v-checkbox>
            <div class="name flex body-2">{{item.name}} {{key}}</div>
            <div class="amount body-1">{{item.amount}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'shoplist-item',
    props: ['item', 'edit', 'key'],
    data: function() {
        return {
            collected: this.item.collected
        }
    },
    watch: {
        edit: function(val) {
            if(!val){
                this.$emit('input', this.item)
            }
        },
        collected: function(newVal){
            this.$emit('item-updated', this.item)
        }
    },
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
    .checkbox {
        width: 48px;
        height: 48px;
        
    }
    amount {
        max-width: 100px;
    }
</style>