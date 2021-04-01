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
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'


export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    TopBar,
    SideBar,
  },
  methods: {

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
