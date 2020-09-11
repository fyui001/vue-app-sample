<template>
  <div class="auth-nav">
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
          <b-nav-item to="/photos/upload/" right>写真を共有</b-nav-item>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>{{ userId }}</em>
            </template>
            <b-dropdown-item-button @click="handleLogout">
              LOGOUT
            </b-dropdown-item-button>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '../sidevar/sidevar.vue'
import UserVuexModule from '../../../store/UserModule'
export default Vue.extend({
  name: 'AuthNav',
  data() {
    return {
      userId: '',
    }
  },
  components: {
    Sidebar,
  },
  async created() {
    this.userId = UserVuexModule(this.$store).user.userId
  },
  methods: {
    async handleLogout() {
      await UserVuexModule(this.$store).logoutAction()
      window.location.href = '/'
    },
  },
})
</script>

<style scoped></style>
