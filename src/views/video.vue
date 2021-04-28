<template>
  <div class="test_two_box">
    <video id="myVideo" class="video-js">
      <source :src="videoSrc" type="video/mp4">
    </video>
  </div>
</template>
<script>
import Video from 'video.js'
import 'video.js/dist/video-js.css'
export default {
  name: '',
  data() {
    return {
      videoSrc: "http://localhost/api/upload/2.mp4"
    }
  },
  mounted() {
    let mPlayer = Video("myVideo", {

      controls: true,
      autoplay: true,
      preload: "auto",
      width: "800px",
    });
  }
}
</script>
<style scoped>
</style>
