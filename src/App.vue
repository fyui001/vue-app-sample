<template>
  <div id="app">
    <BaseView />
    <router-view />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import BaseView from './layouts/base-view.vue'

  export default Vue.component('App',Vue.extend({
    components: {
      BaseView
    },
  }))
</script>