<template>
    <v-card flat>
        <v-toolbar color="white" flat card>
            <v-toolbar-title class="title">New list</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-on:click="addItem" icon flat>
                <v-icon>add</v-icon>
            </v-btn>
        </v-toolbar>
        <div class="items flex">
            <v-text-field v-model="listData.title" label="List title" single-line></v-text-field>
            <div class="items-container" v-for="item in listData.items" :key="item.id">
                <v-text-field class="name" v-model="item.name" label="Item name" single-line></v-text-field>
                <v-text-field class="amount" @keyup.tab.once="addItem" v-model="item.amount" label="Amount" single-line></v-text-field>
            </div>
        </div>
        <div class="buttons flex">
            <v-btn v-on:click="submitList" color="primary">DONE</v-btn>
        </div>
    </v-card>
</template>

<script>
    import ShoplistItem from './ShoplistItem.vue'
    export default {
        name: 'NewCardDialog',
        data: function() {
            return {
                listData: {
                    title: '',
                    items: [],
                    completed: false,
                }
            }
        },
        created: function() {
            this.addItem()
        },
        methods: {
            addItem: function(){
                var newItem = {
                    name: '',
                    amount: '',
                    collected: false,
                    id: this.getNextId()
                }
                this.listData.items.push(newItem)
            },
            getNextId: function(){
                if(this.listData.items === undefined){
                    return 0;
                }
                var id = this.listData.items.length
                return id + 1
            },
            submitList: function(){
                var newList = this.listData
                if(newList.items.length > 0){
                    this.$emit('submitlist', newList)
                    this.listData = {}
                    this.addItem()
                }
            }
        },
        components: {
            ShoplistItem
        }
    }
</script>

<style scoped>
    #container {
        border-radius: 2px;
        background-color: white;
    }
    .items {
        padding: 8px 16px 8px 16px;
    }
    .header {
        display: flex;
        align-content: center;
        flex-direction: row;
        margin-top: 8px;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin: 0;
    }
    .items-container {
        display: flex;
        flex-direction: row;
        padding-top: 0;
    }
    .name {
        display: flex;
        margin-right: 16px;
    }
    .amount {
        max-width: 100px;
    }
</style>
