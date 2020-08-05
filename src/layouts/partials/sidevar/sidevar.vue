<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      title="Vue.jsサンプル"
      bg-variant="info"
      text-variant="light"
      width="230px"
      backdrop
    >
      <b-link to="/photos">Photos</b-link>
    </b-sidebar>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Sidebar'
  })
</script>

<style scoped>
</style>