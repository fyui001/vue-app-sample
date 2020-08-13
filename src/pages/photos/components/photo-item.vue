<template>
  <div class="photo-item">
    <div class="photo-wrapper">
      <img
        :src="item.image_url"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'PhotoItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  })
</script>

<style scoped>

</style>