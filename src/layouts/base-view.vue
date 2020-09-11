<template>
  <div>
    <guest-nav v-if="!isLogin" />
    <auth-nav v-if="isLogin" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GuestNav from './partials/navbar/guest-nav.vue'
import AuthNav from './partials/navbar/auth-nav.vue'
import UserVuexModule from '../store/UserModule'

export default Vue.extend({
  name: 'BaseView',
  data() {
    return {
      isLogin: false,
    }
  },
  components: {
    GuestNav,
    AuthNav,
  },
  async created() {
    this.isLogin = UserVuexModule(this.$store).isLogin
  },
})
</script>

<style scoped></style>
