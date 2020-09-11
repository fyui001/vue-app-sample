<template>
  <div class="guest-nav">
    <b-navbar type="dark" variant="info" toggleable="lg">
      <b-button v-b-toggle.sidebar-backdrop variant="info">
        <b-icon icon="list"></b-icon>
      </b-button>
      <b-navbar-brand href="/">
        Vue.jsサンプル
      </b-navbar-brand>
      <Sidebar />
      <b-navbar-toggle target="guest-navigation" />
      <b-collapse is-nav id="guest-navigation">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" right>Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '../sidevar/sidevar.vue'
export default Vue.extend({
  name: 'GuestNav',
  components: {
    Sidebar,
  },
})
</script>

<style scoped></style>
