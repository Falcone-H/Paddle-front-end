<template>
  <div class="result_card">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <div class="empty_box" v-show="isUpload === false">
          <el-empty :image-size="200" description="您暂未上传视频"></el-empty>
        </div>
        <div class="video_box" v-show="isUpload === true">
          <video id="videoPlayer" class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9" controls
            width='100%'>
            <source id="sourceBox" :src="videoSrc">
            <p class="vjs-no-js">不支持播放</p>
          </video>
        </div>
        <div class="refresh_box">
          <el-button type="success" plain @click="handleRefresh">刷新视频</el-button>
        </div>
        <div class="download_box">
          <el-button type="primary" plain @click="handleDownload">下载视频</el-button>
          <el-button type="info" plain>重新检测</el-button>
        </div>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
let player = {};
export default {
  name: '',
  data() {
    return {
      videoSrc: ""
    }
  },
  computed: {
    isUpload() {
      return this.$store.state.isUpload;
    },
    toPlay() {
      return this.$store.state.toPlay;
    }
  },
  methods: {
    initVideo() {
      player = videojs('videoPlayer', {
        bigPlayButton: true,
        textTrackDisplay: true,
        errorDisplay: false,
        controlBar: true,
        playbackRates: [0.5, 1, 1.5, 2],
        ControlBar: {
          customControlSpacer: true
        }
      }, function onPlayerReady() {
        this.play();
        setTimeout(() => {  // 延时确保能监听到视频源错误
          var mediaError = this.error();
          if (mediaError != null && mediaError.code) {
            this.$message({
              message: "播放出错",
              type: "error"
            })
          }
        }, 1000);
      })
      console.log("video is ready...");
    },
    handleDownload() {
      console.log(this.$store.state.activeName);
    },
    handleRefresh() {
      player.src("http://localhost/api/upload/2.mp4");
      player.play();
    }
  },
  mounted() {
    if (this.toPlay) {
      this.initVideo();
    }
  },
  beforeUnmount() {
    const videoDom = this.$refs.videoPlayer;
    videojs(videoDom).dispose();  // 销毁video实例
  }
}
</script>

<style>
.result_card .el-empty {
  border: 3px dashed #d9d9d9;
}
.download_box {
  margin-top: 10px;
}
.refresh_box {
  margin-top: 10px;
}
</style>
