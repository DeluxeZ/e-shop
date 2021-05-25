<template>
  <div class="container">
    <div class="login_box">
      <!--头像-->
      <div class="avatar">
        <img src="../assets/logo.png">
      </div>

      <el-form label-width="0" class="input_form" :model="loginForm">
        <!--输入框-->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-testuser" v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="iconfont icon-testkey" v-model="loginForm.password"></el-input>
        </el-form-item>

        <!--button-->
        <el-form-item class="buttons">
          <el-button type="primary">登陆</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: #2b4b6b;
}

.login_box {
  height: 300px;
  width: 450px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #eee;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}

.buttons {
  display: flex;
  justify-content: flex-end;
}

.input_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}
</style>
