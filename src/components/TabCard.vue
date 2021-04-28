<template>
  <el-tabs :activeName="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="上传视频" name="upload">
      <upload-card></upload-card>
    </el-tab-pane>
    <el-tab-pane label="查看结果" name="result">
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
    },
  },
  components: {
    UploadCard,
    ResultCard
  },
  methods: {
    handleClick(tab) {
      var name = tab.props.name;
      this.$store.commit("changeActiveName", name);
    },
  }
}
</script>
<style scoped>
</style>
