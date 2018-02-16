<template>
  <v-dialog class="login-dialog" v-model="show">
      <v-card>
          <v-card-title>Log in</v-card-title>
          <v-card-text>Log in with Google auth</v-card-text>
          <Login></Login>
      </v-card>
  </v-dialog>
</template>

<script>
    import Login from './Login.vue'
    export default {
        name: 'LoginDialog',
        props: [
            'show'
        ],

        components: {
            Login
        }
    }
</script>

<style scoped>

</style>