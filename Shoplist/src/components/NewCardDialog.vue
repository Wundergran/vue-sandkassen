<template>
    <div id="container">
        <div class="header">
            <v-text-field v-model="listData.title" hint="List title" single-line></v-text-field>
        </div>
        <div class="items flex">
            <div v-for="item in listData.items" :key="item.name">
                <ShoplistItem v-bind:item="item" edit></ShoplistItem>
            </div>
        </div>
        <div class="buttons">

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
                    items: [
                        {
                            name: ''
                        }
                    ],
                    completed: false,
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
        min-height: 300px;
        border-radius: 2px;
        padding: 8px 16px 16px 16px;
        background-color: white;
    }
</style>
