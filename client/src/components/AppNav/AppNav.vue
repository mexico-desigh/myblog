<template>
  <div class="AppNav">
    <div class="appnav">
      <!-- 名字 -->
      <div class="name">披着毛毯去冒险</div>
      <!-- 导航栏 -->
      <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/article">文章</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/message">留言</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/link">友链</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link to="/about">关于</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 登录注册 -->
      <div class="login" @click="login">
        <el-button type="success" size="small">登录/注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "AppNav",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      success() {
        axios({
          method: "get",
          url: "http://localhost:8080/login",
        }).then(res => {
          console.log(res.data);
        })
      }
    }
  }
</script>
<style lang="less">
  .AppNav {
    width: 100%;
    height: 60px;
    margin: 0 auto;
    margin-bottom: 20px;
    .appnav {
      max-width: 1300px;
      min-width: 800px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .name {
        line-height: 60px;
      }
      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 400px;
        a {
          text-decoration: none;
        }
      }
      .login {
        margin: 15px;
      }
    }
  }
</style>
