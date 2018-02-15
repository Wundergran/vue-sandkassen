<template>
    <v-toolbar color="primary">
        <v-toolbar-title class="white--text">Shoplist</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="user-container" v-if="user">
            <div class="user-text">{{user.displayName}}</div>
            <img class="profile-photo" v-bind:src="user.photoURL">
        </div>
    </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: [
      'user'
    ]
}
</script>

<style scoped>
    .user-container{
        display: flex;
        flex-direction: row;
        height: inherit;
        margin: auto;
    }
    .user-text{
        margin: auto;

        color: white;
    }
    .profile-photo{
        object-fit: contain;
        width: 24px;
        margin: 8px;
    }
</style>
