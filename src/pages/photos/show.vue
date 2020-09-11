<template>
  <div class="photo-detail">
    <div class="loading-view-container" v-if="isLoading">
      <div class="loading-view-description text-center">
        <b-spinner class="loading-spinner" variant="light" type="grow" />
        <p class="loading-text">Loading Now...</p>
      </div>
    </div>
    <div class="photo-detail-wrapper">
      <div class="loading-failed" v-if="isLoadingFailed && !isLoading">
        <b-alert show variant="danger">読み込みに失敗しました</b-alert>
      </div>
      <div class="detail-wrapper">
        <div class="image-wrapper">
          <img class="image" :src="photo.image_url" />
        </div>
        <div class="detail-header">
          <div class="title-wrapper">
            <h1 class="title">{{ photo.title }}</h1>
          </div>
          <div class="author-info">
            <div class="author-name">
              {{ photo.user.name }}
              <span class="post-date">{{ photo.created_at.slice(0, 9) }}</span>
            </div>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="content">
            {{ photo.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PhotoVuexModule from '../../store/PhotoModule'

export default Vue.extend({
  name: 'PhotoShow',
  data() {
    return {
      isLoading: false,
      isLoadingFailed: false,
      photo: {},
    }
  },
  async created() {
    try {
      this.isLoading = true
      await PhotoVuexModule(this.$store).fetchPhoto(<number>(<unknown>this.$route.params.id))
      this.photo = PhotoVuexModule(this.$store).photo
      this.isLoading = false
    } catch {
      await this.$router.push('/photos')
    }
  },
})
</script>

<style lang="scss">
body {
  background-color: #f9f9f9;
}
.photo-detail {
  .loading-view-container {
    position: fixed;
    top: 0;
    left: 0;
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
  .loading-failed {
    margin: 30px;
  }
  .photo-detail-wrapper {
    width: 60%;
    border-radius: 15px;
    background-color: #ffff;
    border: 1px solid #f9f9f9;
    margin: 3rem auto;
    padding: 20px;
    height: auto;
    .detail-wrapper {
      margin: 10px 20px;
      .image-wrapper {
        width: 100%;
        height: 100%;
        margin: auto;
        .image {
          max-width: 100%;
          height: auto;
        }
      }
      .detail-header {
        margin: 10px 0;
        padding-bottom: 25px;
        border-bottom: 1px dashed #333;
        .author-info {
          .author-name {
            font-size: 16px;
            .post-date {
              margin-left: 15px;
            }
          }
        }
      }
      .title-wrapper {
        margin-top: 30px;
        margin-bottom: 10px;
        .title {
          font-size: 30px;
        }
      }
      .content-wrapper {
        margin: 40px auto;
        .content {
          white-space: pre-line;
        }
      }
    }
  }
}
</style>
