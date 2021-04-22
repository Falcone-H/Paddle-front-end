<template>
  <el-tabs :activeName="activeName" type="card">
    <el-tab-pane label="上传视频" name="upload" @click="handleUpload">
      <upload-card></upload-card>
    </el-tab-pane>
    <el-tab-pane label="查看结果" name="result" @click="handleResult">
      <result-card></result-card>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import UploadCard from '../components/UploadCard'
import ResultCard from '../components/ResultCard'
export default {
  name: '',
  data() {
    return {

    }
  },
  computed: {
    activeName() {
      console.log(this.$store.state.activeName);
      return this.$store.state.activeName;
    }
  },
  components: {
    UploadCard,
    ResultCard
  },
  methods: {
    handleUpload() {
      this.$store.commit("uploadTap");
    },
    handleResult() {
      this.$store.commit("resultTap");
    }
  }
}
</script>
<style scoped>
</style>
