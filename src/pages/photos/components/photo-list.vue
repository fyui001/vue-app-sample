<template>
    <b-container style="margin: 70px auto">
      <b-row>
        <b-card
          v-for="item in photoList"
          :img-src="item.image_url"
          style="max-width: 20rem;"
          class="mb-2"
          >
          <b-card-body>
            <b-card-title>{{ item.title }}</b-card-title>
            <b-card-text class="card-text">

            </b-card-text>
          </b-card-body>
          <b-card-footer>
            post by {{ item.user.name }}
          </b-card-footer>
        </b-card>
      </b-row>
    </b-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import PhotoVuexModule from '../../../store/PhotoModule'

  export default Vue.extend({
    name: 'PhotoList',
    data() {
      return {
        isLoading: false,
        isLoadFailed: false,
      }
    },
    async created() {
      try {
        if ( !PhotoVuexModule(this.$store).photoList.length ) {
          this.isLoading = true
          await PhotoVuexModule(this.$store).fetchPhotoList()
          this.isLoading = false
          console.log(PhotoVuexModule(this.$store).photoList)
        }
      } catch(e) {
        this.isLoadFailed = true
      }
    },
    computed: {
      photoList() {
        return (
          PhotoVuexModule(this.$store).photoList.data
        )
      }
    }
  })

</script>

<style scoped>
  .card-text {
      margin-top: 500px;
  }
</style>
