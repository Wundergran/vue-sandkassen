<template>
  <v-dialog class="login-dialog" v-model="show" max-width="500px">
      <v-card>
          <v-card-title>Log in</v-card-title>
          <Login class="login-btn"></Login>
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
    login-dialog {
        max-width: 500px;
    }
</style>