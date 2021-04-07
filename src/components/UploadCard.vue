<template>
  <div class="upload_card">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-upload class="upload_box" ref="upload" drag action="" multiple :auto-upload="false" :file-list="fileList"
          :on-preview="handlePreview" :on-remove="handleRemove" :http-request="httpRequest" :on-change="handleChange">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 mp4 文件
            </div>
          </template>
        </el-upload>
        <div class="submit-btn">
          <el-button type="primary" plain @click="handleSubmit">提交</el-button>
        </div>
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
      fileList: [],
      param: '',
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.fileList = fileList;
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file, fileList) {
      console.log(file.raw);
      this.fileList = fileList;
    },
    httpRequest(param) {
      console.log(param);
      this.param = param;
    },
    handleSubmit() {
      console.log(this.fileList);
      let formData = new FormData();
      formData.append('fileList', this.fileList);

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
.submit-btn {
  margin-top: 10px;
}
</style>
