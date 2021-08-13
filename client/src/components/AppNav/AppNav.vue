<template>
   import { log } from 'util';
  <div class="AppNav">
    <div class="appnav">
      <!-- 名字 -->
      <div class="name">披着毛毯去冒险</div>
      <!-- 导航栏 -->
      <div class="nav">
        <el-menu :default-active="activeIndex1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
  <!-- 表单处理 -->
  <div v-if="ifshow" class="back">
    <div class="box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 登录表单 -->
        <el-tab-pane label="登录" name="first">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user" label-width="80px" style="marginBottom: 33px">
              <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" label-width="80px" style="marginBottom: 33px">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" label-width="80px" style="marginBottom: 33px">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">注册</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  export default {
    name: "AppNav",
    data() {
      // 表单规则
      // 账号验证规则
      var validateUser = (rule, value, callback) => {
        var name = /^[a-zA-Z0-9_-]{4,16}$/;
        // 4到16位（字母，数字，下划线，减号）
        if (value === '') {
          callback(new Error('请输入账号'));
        } else if (!name.test(value)) {
          callback(new Error('请输入4到16位（字母，数字，下划线，减号）'));
        } else {
          callback();
        }
      };
      // 密码验证规则
      var validatePass = (rule, value, callback) => {
        var pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
        // 至少8-16个字符，至少1个大写字母，1个小写字母和1个数字
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!pwd.test(value)) {
          callback(new Error('请输入至少8-16个字符，至少1个大写字母，1个小写字母和1个数字'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeIndex1: '1',
        activeIndex2: '1',
        activeName: 'first',
        ifshow: true,
        ruleForm: {
          user: '',
          pass: '',
          checkPass: ''
        },
        // 表单规则
        rules: {
          user: [{
            validator: validateUser,
            trigger: 'blur'
          }],
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      success() {
        this.ifshow = true;
        console.log(this.ifshow);
        // axios({
        //   method: "get",
        //   url: "http://localhost:8080/login",
        // }).then(res => {
        //   console.log(res.data);
        // })
      },
      // 表单验证
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid);
          if (valid) {
            alert('submit!');
            axios({
              method: "get",
              url: "api/getUser",
            }).then(res => {
              console.log(res.data);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less">
  .AppNav {
    color: #333;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 20px; // border-bottom: 2px solid #e6e6e6;
    .appnav {
      max-width: 1300px;
      min-width: 800px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .name {
        line-height: 50px;
      }
      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 400px;
        box-sizing: border-box;
        a {
          text-decoration: none;
          color: #333;
        }
        .el-menu-item {
          border-bottom: 2px solid #8cc5ff;
          height: 50px;
          line-height: 50px;
          box-sizing: content-box;
          padding-bottom: 2px;
        }
        .router-link-active {
          color: #8cc5ff;
        }
        .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
        .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
          outline: 0;
          color: #8cc5ff;
          border-bottom-color: #8cc5ff;
        }
        .el-menu-demo {
          border-bottom: 2px solid transparent;
          box-sizing: border-box;
          height: 54px;
        }
      }
      .login {
        margin: 15px;
      }
    }
  }
  .back {
    background: rgba(rgb(71, 71, 71), 0.3);
    width: 100%;
    margin: 0;
    height: 1000px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    .box {
      margin: 200px auto;
      width: 300px;
      height: 320px;
      background: white;
      border-radius: 10px;
      overflow: hidden;
      padding: 20px;
      .el-menu-demo {
        border-bottom: 2px solid transparent;
        box-sizing: border-box;
      }
      .el-tabs__item {
        padding: 0 10px;
      }
      .el-tabs__nav-wrap::after {
        height: 0;
      }
    }
  }
  .el-form-item {
    margin-bottom: 33px;
  }
</style>
