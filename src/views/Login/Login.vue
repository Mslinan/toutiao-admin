<template>
  <div class="loginContainer">
    <el-form class="el-form" ref="form" :model="user">
      <el-form-item class="img-div">
        <img class="el-img" src="./logo.png" alt="">
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="user.mobile"
          placeholder="请输入手机号"
          prefix-icon="el-icon-phone-outline"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="user.code"
          placeholder="请输入验证码"
          prefix-icon="el-icon-postcard"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">我已阅读注意事项及相关法律法规</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="el-btn" type="primary" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '../../utils/request'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false
    }
  },
  methods: {
    async onLogin () {
      // 获取用户输入的手机号和验证码
      const user = this.user
      // 发送请求看是否信息正确
      const res = await request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user // 请求体
      })
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped>
.loginContainer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(./login_bg.jpg);
  background-size: cover;
  .el-form {
    background-color: #fff;
    padding: 50px;
    padding-top: 0;
    min-width: 300px;
    border-radius: 10px;
    .el-btn {
      width: 100%;
    }
    .img-div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      .el-img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>
