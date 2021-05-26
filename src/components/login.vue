<template>
  <div class="container">
    <div class="login_box">
      <!--头像-->
      <div class="avatar">
        <img src="../assets/logo.png" alt="logo"/>
      </div>
      <h2>欢迎使用Deluxe后台系统</h2>

      <el-form ref="loginFormRef" label-width="0" class="input_form" :model="loginForm" :rules="loginRules">
        <!--输入框-->
        <el-form-item prop="name">
          <el-input prefix-icon="iconfont icon-test-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="iconfont icon-test-key" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>

        <!--button-->
        <el-form-item class="buttons">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="reset">重置</el-button>
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
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    reset: function () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (valid === true) {
          const {data: res} = await this.$http.post('login', this.loginForm)
          console.log(res)
          if (res.meta.status === 200) {
            this.$message.success('登陆成功')
            window.sessionStorage.setItem('token', res.data.token)
            this.$router.push('/home')
          } else {
            this.$message.error('登陆失败')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: #2b4b6b;
}

h2 {
  position: absolute;
  top: 70px;
  width: 450px;
  text-align: center;
}

.login_box {
  height: 350px;
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
