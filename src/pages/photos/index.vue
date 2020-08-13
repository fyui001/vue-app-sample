<template>
  <div class="photo">
    <div class="loading-view-container" v-if="isLoading">
      <div class="loading-view-description text-center">
        <b-spinner class="loading-spinner" variant="light" type="grow" />
        <p class="loading-text">Loading Now...</p>
      </div>
    </div>
    <b-container class="photo-list-wrapper">
      <div class="photo-list">
        <b-card
          v-for="item in photoList"
          :img-src="item.image_url"
        >
          <b-list-group flush>
            <b-list-group-item>
              <b-card-title>{{ item.title }}</b-card-title>
            </b-list-group-item>
            <b-list-group-item class="card-button">
              <b-card-text>
                <b-button v-on:click="showDetail(item.id)" block variant="info">SHOW</b-button>
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
        photoList: {}
      }
    },
    async created() {
      try {
        this.isLoading = true
        await PhotoVuexModule(this.$store).fetchPhotoList()
        this.photoList = PhotoVuexModule(this.$store).photoList.data
        this.isLoading = false
      } catch(e) {
        this.isLoadFailed = true
      }
    },
    methods: {
      showDetail(id: any) {
        this.$router.push({path: `photos/show/${id}`)
      }
    },
  })

</script>

<style lang="scss" scoped>
  .loading-view-container {
    position: fixed;
    top: 0;
    left:0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #17a2b8;
    .loading-view-description {
      text-align: center;
      .loading-spinner {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .loading-text {
        color: white;
      }
    }
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
</style>

