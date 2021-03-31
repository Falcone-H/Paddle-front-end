<template>
  <div class="home">
    <el-container>
      <!-- 顶部栏 -->
      <el-header>
        <top-bar></top-bar>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside>
          <side-bar></side-bar>
        </el-aside>
        <!-- 主要内容 -->
        <el-container>
          <el-main>
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="上传图片" name="first">
                <upload-card></upload-card>
              </el-tab-pane>
              <el-tab-pane label="查看结果" name="second">
                <result-card></result-card>
              </el-tab-pane>
            </el-tabs>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import UploadCard from '../components/UploadCard'
import ResultCard from '../components/ResultCard'


export default {
  name: 'Home',
  data() {
    return {
      activeName: 'first'
    }
  },
  components: {
    TopBar,
    SideBar,
    UploadCard,
    ResultCard
  }
}
</script>

<style>
.home .el-header {
  padding: 0;
}
.home .el-aside {
  margin-top: 10px;
  width: 203px !important;
  height: 682px;
  border-right: #e4e7ed 2px solid;
}
</style>
