<template>
  <div class="login">
    <b-container>
      <b-card class="mb-2" style="width: 500px; margin: 70px auto auto;">
        <h4 class="text-center">
          Please Login
        </h4>
        <p>Or Login with <strong>matsui_eriko</strong> and the password <strong>hogehoge</strong></p>
        <b-form @submit.prevent="handleLogin">
          <b-input-group class="mb-2" size="sm">
            <b-input-group-prepend is-text>
              <b-icon icon="person-fill" />
            </b-input-group-prepend>
            <b-input v-model="user_id" type="text" placeholder="User ID" :disabled="submitting" />
          </b-input-group>
          <b-input-group class="mb-2" size="sm">
            <b-input-group-prepend is-text>
              <b-icon icon="shield-lock-fill" />
            </b-input-group-prepend>
            <b-input v-model="password" type="password" placeholder="Password" :disabled="submitting" />
          </b-input-group>
          <div class="text-center">
            <b-button type="submit" variant="primary">LOGIN</b-button>
          </div>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserVuexModule from '../store/UserModule'

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      user_id: '',
      password: '',
      submitting: false,
    }
  },
  methods: {
    async handleLogin() {
      this.submitting = true
      await UserVuexModule(this.$store).loginAction({
        user_id: this.user_id,
        password: this.password,
      })
      window.location.href = '/'
      this.submitting = false
    },
  },
})
</script>

<style scoped></style>
