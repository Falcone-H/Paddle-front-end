<template>
  <div class="header">
    <div class="logo">
      <i class="el-icon-guide"></i>
      行人追踪系统
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>项目仓库</el-dropdown-item>
              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      fullscreen: false,
      name: "Falcone",
      message: 2
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    },
    collapse() {
      return this.$store.state.collapse;
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    },
  },
  mounted() {

  }
}
</script>

<style>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 25px;
  font-weight: 800;
  font-family: "Microsoft YaHei";
  color: #409eff;
  background-color: #fff;
}
.header .logo {
  float: left;
  margin-left: 30px;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.user-name {
  margin-left: 10px;
}
.el-dropdown-link {
  color: #000;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
.header {
  border-bottom: #e4e7ed 2px solid;
}
</style>
