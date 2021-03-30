<template>
  <div class="home">
    <!-- 顶部导航开始 -->
    <div class="top_bar">
      <top-bar></top-bar>
    </div>
    <!-- 顶部导航结束 -->
    <!-- 侧边导航开始 -->
    <div class="side_bar">
      <side-bar></side-bar>
    </div>
    <!-- 侧边导航结束 -->
    <!-- 主要内容开始 -->
    <div class="main_content"></div>
    <!-- 主要内容结束 -->
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'

export default {
  name: 'Home',
  components: {
    TopBar,
    SideBar
  }
}
</script>

<style>
.home {
  height: 1030px;
}
.side_bar {
  height: 100%;
  width: 200px;
  background-color: #35363a;
}
.main_content {
  float: left;
}
</style>
