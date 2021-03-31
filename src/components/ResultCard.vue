<template>
  <div class="result_card">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-empty :image-size="200" description="您暂未上传图片"></el-empty>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: '',
}
</script>
<style>
.result_card .el-empty {
  border: 3px dashed #d9d9d9;
}
</style>
