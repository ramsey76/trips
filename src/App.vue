<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
import {namespace} from 'vuex-class';

const authenticationStore = namespace("authenticationStore");

export default {
  name: 'App',
  data () {
    return {
      loggedIn: authenticationStore.Getter.isUserLoggedIn
    }
  }
}
</script>>

<style lang="scss">
@import '@/styles/index.scss';
</style>

