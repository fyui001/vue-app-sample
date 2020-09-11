<template>
  <div id="app" v-if="!loading">
    <BaseView />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import BaseView from './layouts/base-view.vue'
import UserVuexModule from './store/UserModule'

export default Vue.component('App', {
  data() {
    return {
      loading: false,
    }
  },
  components: {
    BaseView,
  },
  async created() {
    this.loading = true
    try {
      await UserVuexModule(this.$store).isLoginCheckAction()
    } catch {
      this.loading = false
    }
    this.loading = false
  },
})
</script>
