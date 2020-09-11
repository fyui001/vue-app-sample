<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      title="Vue.jsサンプル"
      bg-variant="light"
      text-variant="secondary"
      width="225px"
      backdrop
    >
      <ul class="side-menu-list">
        <b-link class="link" to="/photos">
          <li class="menu">
            <b-icon icon="image-fill" />
            <span>Photos</span>
          </li>
        </b-link>
        <b-link class="link" to="/">
          <li class="menu">
            <b-icon icon="link45deg" />
            <span>News</span>
          </li>
        </b-link>
      </ul>
    </b-sidebar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sidebar',
})
</script>

<style scoped lang="scss">
.side-menu-list {
  list-style: none;
  font-size: 20px;
  margin-top: 20px;
  text-decoration: none;
  .link {
    text-decoration: none;
  }
}
.menu {
  color: darkgray;
  margin-top: 20px;
}
</style>
