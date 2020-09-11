<template>
  <div class="photo-list">
    <div class="loading-view-container" v-if="isLoading">
      <div class="loading-view">
        <b-spinner animation="grow" variant="info" />
        <p class="loading-text">Loading Now...</p>
      </div>
    </div>
    <b-container class="photo-list-wrapper">
      <div class="photo-list">
        <b-card v-for="item in photoList" :img-src="item.image_url" :key="item.id">
          <b-list-group flush>
            <b-list-group-item>
              <b-card-title>{{ item.title }}</b-card-title>
            </b-list-group-item>
            <b-list-group-item class="card-button">
              <b-card-text>
                <b-button @click="showDetail(item.id)" block variant="info">SHOW</b-button>
              </b-card-text>
            </b-list-group-item>
          </b-list-group>
          <template v-slot:footer>
            <small>post by {{ item.user.name }}</small>
          </template>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PhotoVuexModule from '../../store/PhotoModule'

export default Vue.extend({
  name: 'Photos',
  data() {
    return {
      isLoading: false,
      isLoadFailed: false,
      photoList: {},
    }
  },
  async created() {
    try {
      this.isLoading = true
      await PhotoVuexModule(this.$store).fetchPhotoList()
      this.photoList = PhotoVuexModule(this.$store).photoList.data
      this.isLoading = false
    } catch (e) {
      this.isLoadFailed = true
    }
  },
  methods: {
    showDetail(id: number) {
      this.$router.push({ path: `photos/show/${id}` })
    },
  },
})
</script>

<style lang="scss" scoped>
.photo-list {
  .loading-view-container {
    left: 50%;
    padding-top: 50px;
    text-align: center;
    font-size: 20px;
  }
  .photo-list-wrapper {
    margin-top: 20px;
  }
  .photo-list-wrapper .photo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .photo-list-wrapper .photo-list .card {
    padding: 5px;
    text-align: center;
    flex: auto;
    max-width: 20rem;
    margin: 10px;
    .card-body {
      padding: 10px;
    }
    .card-text {
      margin-top: 20px;
    }
  }
}
</style>
