
<template>

  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    :collapse="isCollapse" background-color="#35363a" text-color="#fff" active-text-color="#409eff"
    :default-openeds="openeds">
    <el-menu-item index="0">
      <i class="el-icon-s-home"></i>
      <template #title>首页</template>
    </el-menu-item>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-s-grid"></i>
        <span>数据管理</span>
      </template>
      <el-menu-item index="1-1">用户管理</el-menu-item>
      <el-menu-item index="1-2">商品管理</el-menu-item>
      <el-menu-item index="1-3">订单管理</el-menu-item>
      <el-menu-item index="1-4">管理员管理</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-circle-plus-outline"></i>
        <span>添加数据</span>
      </template>
      <el-menu-item index="2-1">添加用户</el-menu-item>
      <el-menu-item index="2-2">添加商品</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <template #title>接口管理</template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>编辑</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      openeds: ['0', '1', '1-1', '1-2', '1-3', '1-4', '2', '2-1', '2-2', '3', '4']
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

.el-menu-item:focus,
.el-menu-item:hover {
  outline: 0;
  background-color: #202124;
}
</style>
