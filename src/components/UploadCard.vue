<template>
  <div class="upload_card">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <el-upload class="upload_box" ref="upload" drag :action="uploadUrl" accept="mp4" multiple :auto-upload="false"
          :file-list="fileList" :on-preview="handlePreview" :on-remove="handleRemove" :http-request="httpRequest"
          :on-success="handleSuccess" :on-change="handleChange">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 mp4 文件，且文件小于 100 MB
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
import axios from 'axios'
export default {
  name: '',
  data() {
    return {
      fileList: [],
      param: '',
      uploadUrl: '/api/data.php',
      uploadFile: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.fileList = fileList;
    },
    handlePreview() {
      console.log("Preview");
      // console.log(file);
    },
    handleChange(file, fileList) {
      console.log("Change");
      const limit = file.size / 1024 / 1024 < 100;
      if (['video/mp4'].indexOf(file.raw.type) == -1) { //'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'
        this.$message.error('请上传正确的视频格式');
        fileList.splice(-1, 1);
        return;
      }
      if (!limit) {
        this.$message.error('上传视频大小不能超过100MB!');
        fileList.splice(-1, 1);
        return;
      }
      if (fileList.length > 1) {
        this.$message.error('每次只能上传一个文件');
        fileList.splice(-1, 1);
        return;
      }
      this.fileList = fileList;
    },
    httpRequest(param) {
      console.log(param);
      this.param = param;
    },
    handleSubmit() {
      if (!this.fileList) {
        this.$message.error('请选择要上传的文件');
        return false;
      }
      let formData = new FormData();
      formData.append("upload", this.fileList[0].raw);
      console.log(this.fileList[0].raw);
      const config = {
        headers: { "Content-Type": "multipart/form-data" }
      };

      var that = this;
      axios.post(this.uploadUrl, formData, config).then(res => {
        console.log("上传成功", res);
        that.fileList.splice(0, 1);
      }).catch(err => {
        console.log("上传失败", err);
      });
    },
    handleSuccess() { //上传成功回调

    },
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
