<template>
  <el-tabs v-model="activeName" type="card" @click="handleClick">
    <el-tab-pane label="上传图片" name="upload">
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
      activeName: 'upload'
    }
  },
  components: {
    UploadCard,
    ResultCard
  }
}
</script>
<style scoped>
</style>
