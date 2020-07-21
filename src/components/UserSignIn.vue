<template>
    <div>
      <div v-show="preloader">
  <div class="animation animation-rotating-square"></div>
</div>
    <div class="container shadow-lg w-100">
    <div class="card card-login border-0 m-5">
      <div class="alert text-center" :class="[server_res == 'success'? 'alery-success':'alert-danger']" v-show="res_show" role="alert">
          {{message}}
      </div>
      <div class="card-header bg-info text-center m-2"><strong class="text-white">Media Login</strong></div>
      <div class="card-body m-3">
        <form class="text-center w-100">
          <div class="form-group">
            <div class="form-label-group">
              <input type="email" id="inputEmail" class="form-control" v-model="email"
               placeholder="Email address" required="required" autofocus="autofocus">
              <span class="text-danger">{{error1}}</span>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input type="password" id="inputPassword" class="form-control" v-model="password" placeholder="Password" required="required">
              <span id="pass_err" class="text-danger">{{error2}}</span>
            </div>
          </div>
          <div class="form-group">
            <div class="checkbox">
              <label>
                <input type="checkbox" value="remember-me">
                Remember Password
              </label>
            </div>
          </div>
          <div class="text-center">
            <a class="btn btn-info w-25" id="login" @click.prevent="Login" href="#">Login</a>
          </div>
        </form>
        <div class="text-center">
          <a class="d-block small" href="#">Forgot Password?</a>
        </div>
        <div class="text-center">
          <span id="err" class="d-block text-danger"></span>
        </div>
        <div class="text-center">
          <span class="text-success" v-show="loading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
        </span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import validator from 'validator'
import axios from 'axios'

export default {
  name: 'UserSignIn',
  data(){
    return {
      error1: "",
      error2: "",
      email: "",
      password: "",
      loading: false,
      server_res: "",
      message: "",
      res_show: false,
      preloader: true
    }
  },
  methods: {
    Login(){
      this.res_show = false
      if(!this.email) this.error1 = "email required";
      else{
        if(validator.isEmail(this.email) === false) this.error1 = "Invalid Email Format"
        else this.error1 = ""
      }
      if(!this.password) this.error2 = "password required";
      else this.error2 = "";

      if(this.email.length != 0 && this.password.length != 0 && validator.isEmail(this.email) === true){
        this.loading = true
        let self = this
        setTimeout(function(){
          self.LogInRequest(self.email,self.password)
        }, 1000)
      }
    },
    async LogInRequest(email,password){
      try {
          let loginResponce = await axios({
            url: "https://media-kokrokooad.herokuapp.com/oauth/token",
            method: "POST",
            dataType: "JSON",
            data: {
              grant_type : "password",
              client_id : 1,
              client_secret: "4AsiEW6jSyq1nC2b9xM2qkyLfSVu4bJbGU8sG1qu",
              username: email,
              password: password,
              provider: "users"
            }
          })

          if(loginResponce.status === 200){
            console.log(loginResponce)
            this.$session.start()
            this.$session.set("media-jwt",loginResponce.data.access_token)
            this.$router.push({path: '/media-dashboard'})
          }
      } catch(e) {
        // statements
        console.log(e.response)
        if(e.response.status === 401){
          this.message = "wrong username or password"
          this.server_res = "error"
          this.loading = false
          this.res_show = true
        }
      }
    }
  },
  created(){
    this.preloader = false
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
