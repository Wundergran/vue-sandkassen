<template>
    <v-dialog max-width="500px">
        <ShoplistCard></ShoplistCard>
    </v-dialog>
</template>

<script>
    export default {
        name: 'NewCardDialog',
        props: [
            'show'
        ]
    }
</script>

<style scoped>

</style>
