<template>
  <div class="photo-detail-wrapper">
    <div class="photo-detail">
      <div class="image-wrapper">
        <img class="image" :src="photo.image_url" />
      </div>
      <h1>{{ photo.title }}</h1>
      <p>{{ photo.content }}</p>
      <span>{{photo.created_at}}</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import PhotoVuexModule from "../../store/PhotoModule";
  export default  Vue.extend({
    name: "PhotoShow",
    data() {
      return {
        isLoading: false,
        isLoadingFailed: false,
        photo: {}
      }
    },
    async created() {
      try {
        this.isLoading = true
        await PhotoVuexModule(this.$store).fetchPhoto(this.$route.params.id)
        this.photo = PhotoVuexModule(this.$store).photo
        this.isLoading = false
      } catch(e) {
        this.isLoadingFailed = true
      }
    }
  })
</script>

<style scoped lang="scss">
  .photo-detail{
    width: 80%;
    border-radius: 15px;
    border: 1px solid #CCC;
    margin: 1rem auto;
    padding: 20px;
    height: auto;
    .image-wrapper {
      width: 100%;
      height: 100%;
      .image {
        max-width: 100%;
        height: auto;
      }
    }
  }
</style>