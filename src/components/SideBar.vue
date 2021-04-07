
<template>
  <div class="aside">
    <el-menu default-active="this.$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" background-color="#fff" text-color="#000" active-text-color="#409eff"
      :default-openeds="openeds" router>
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <template #title>首页</template>
      </el-menu-item>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-s-grid"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item index="/home/manageUser">用户管理</el-menu-item>
        <el-menu-item index="/home/manageAdmin">管理员管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-circle-plus-outline"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item index="/home/addUser">添加条目</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/interface">
        <i class="el-icon-document"></i>
        <template #title>接口管理</template>
      </el-menu-item>
      <el-menu-item index="/home/edit">
        <i class="el-icon-setting"></i>
        <template #title>编辑</template>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      openeds: ['0', '1', '2']
    };
  },
  computed: {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
