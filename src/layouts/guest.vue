<template>
  <guest-nav />
</template>

<script lang="ts">
  import Vue from 'vue'
  import GuestNav from './partials/navbar/guest-nav.vue'

  export default Vue.extend({
    name: 'Guest',
    components: {
      GuestNav
    }
  })
</script>

<style scoped>

</style>