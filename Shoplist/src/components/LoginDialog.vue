<template>
    <v-dialog class="login-dialog" v-model="showDia" max-width="500px">
        <v-card>
            <v-card-title>Log in</v-card-title>
            <Login class="login-btn"></Login>

            <v-btn class="anon-btn" @click.stop="loginAnon" flat color="secondary">Log in as Anon</v-btn>
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
        data: function() {
            return {
                showDia: false
            }
        },
        methods: {
            loginAnon: function() {
                this.$emit('login-anon')
                this.$emit('dismiss')
            }
        },
        watch: {
            show: function(val) {
                this.showDia = val
            },
            showDia: function(val) {
                if(!val){
                    this.$emit('dismiss')
                }
            }
        },
        components: {
            Login
        }
    }
</script>

<style scoped>
    login-dialog {
        max-width: 500px;
    }
    .anon-btn {
        margin: auto;
    }
</style>