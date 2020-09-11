<template>
  <div class="home">
    <b-container>
      <div class="carousel">
        <b-carousel
          id="carousel-fade"
          fade
          indicators
          controls
          :interval="3300"
          img-width="1024"
          img-height="480"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide caption="Welcome to my world" img-src="./img/img-1.jpg" />
          <b-carousel-slide caption="Yokohama" img-src="./img/img-2.jpg" />
          <b-carousel-slide caption="Tokyo" img-src="./img/img-3.jpg" />
          <b-carousel-slide caption="" img-src="./img/img-4.jpg" />
          <b-carousel-slide caption="" img-src="./img/img-5.jpg" />
        </b-carousel>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '../assets/img-1.jpg'
import '../assets/img-2.jpg'
import '../assets/img-3.jpg'
import '../assets/img-4.jpg'
import '../assets/img-5.jpg'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      slide: 0,
      sliding: false,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
})
</script>

<style scoped>
.carousel {
  width: 1080px;
  margin: 20px auto;
  text-align: center;
}
</style>
