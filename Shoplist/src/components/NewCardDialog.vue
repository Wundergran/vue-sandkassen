<template>
    <div id="container">
        <div class="header">
            <div class="title">New list</div>
            <span class="flex"></span>
            <v-btn v-on:click="addItem" icon flat>
                <v-icon>add</v-icon>
            </v-btn>
        </div>
        <div class="items flex">
            <v-text-field v-model="listData.title" label="List title" single-line></v-text-field>
            <div class="items-container" v-for="item in listData.items" :key="item.id">
                <v-text-field class="name" v-model="item.name" label="Item name"></v-text-field>
                <v-text-field class="amount" @keydown.tab="addItem" v-model="item.amount" label="Amount"></v-text-field>
            </div>
        </div>
        <div class="buttons flex">
            <v-btn v-on:click="submitList" color="primary">DONE</v-btn>
        </div>
    </div>
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
        padding: 8px 16px 8px 16px;
        background-color: white;
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
