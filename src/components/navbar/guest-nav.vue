<template>
  <div>
    <b-navbar type="dark" variant="warning" toggleable="lg">
      <b-navbar-brand href="/">
        Vue.jsサンプル
      </b-navbar-brand>
        <b-navbar-toggle target="guest-navigation"/>
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
  export default Vue.extend({
    name: 'guest-nav'
  })
</script>

<style scoped>

</style>