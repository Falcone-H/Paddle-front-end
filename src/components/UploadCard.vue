<template>
  <div class="upload_card">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-upload class="upload_box" drag action="#" multiple :file-list="fileList" list-type="picture"
          :on-preview="handlePreview" :on-remove="handleRemove">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>
<style>
.upload_box .el-upload {
  display: block;
  width: 100%;
}
.upload_box .el-upload-dragger {
  width: 100%;
  height: 360px;
  border: 3px dashed #d9d9d9;
}
.upload_box .el-upload-dragger .el-icon-upload {
  margin: 110px 0 16px;
}
</style>
