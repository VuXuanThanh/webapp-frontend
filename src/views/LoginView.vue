<template>
  <div class="registration" :status="UserId">
    <div class="form">
      <div class="form-title">Đăng nhập</div>

      <div class="user-error" v-if="IsError">
        <div class="user-error-icon">
          <i class="fa-solid fa-triangle-exclamation error-icon-error"></i>
        </div>
        <div class="user-error-message">{{UserMsg}}</div>
      </div>

      <div class="form-group">
        <div class="form-label form-label-mark">Địa chỉ Email</div>
        <input
          type="text"
          name="Email"
          class="form-control Email"
          @blur="validateInput"
          v-model="authenticateRequest.email"
        />
        <span class="form-message">Vui lòng nhập lại trường này</span>
      </div>

      <div class="form-group">
        <div class="form-label form-label-mark">Mật khẩu</div>
        <input
          type="password"
          name="Password"
          class="form-control password"
          @blur="validateInput"
          v-model="authenticateRequest.passwords"
        />
        <span class="form-message">Vui lòng nhập lại trường này</span>
      </div>

      <button class="form-button" @click="loginUser">Đăng nhập</button>
      <!-- <button class="form-button" @click="bay">
            chuyển
      </button>-->

      <div class="form-information">
        Bạn quên mật khẩu?
        <router-link to="/" class="form-information-link">Quên mật khẩu</router-link>
      </div>


    

      <p class="note">{{UserId}}</p>
    
      <!-- {{Categories}} -->
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from "vuex";

  import { validation } from "../mixins/validation";
  export default {
    mixins: [validation],
    data() {
      return {
        authenticateRequest: {
          email: "",
          passwords: "",
        },
      };
    },
    computed: {
      ...mapGetters(["UserId", "UserName", "Age", "IsError", "UserMsg", "IsLoggedIn"]),

      categoryFirst() {
        let result = Object.assign({}, this.Categories[0]);
        return result;
      },
    },
    methods: {
      ...mapActions(["handleLogin"]),
      ...mapMutations(["login"]),

      loginUser() {
        let me = this;
         let x = me.$el;
         console.log(x);
        console.log("validate du lieu truoc khi gui");
        console.log(me.Age);
        let isValid = me.validate();
        if (isValid) {
          me.handleLogin(me.authenticateRequest);
          console.log(`state ma khach hanf ${me.UserId} hihi`);
          // let userIdCookie = me.$cookies.get("_userId")

              // me.$router.push({ path: '/' });
        } 
        console.log('vu xuan thanh==================')
        let y = me.$el.querySelector('.note');
          
            console.log(y.innerHTML);
        // console.log('get coooki name', this.$cookies.get('_user'));
      },

      getCookie123(){
        console.log(this.$cookies.get("_userId"));
      },

      getInforUser(){
        return this.$cookies.get("_userId");
      }
    },
    created() {
      let me = this;
      if (me.$cookies.get("_userId")) {
        me.$router.go(-1);
      }
    },
    mounted() {
      console.log('login mouted');
    },
    updated() {
     console.log('login updated');
      let y = this.$cookies.get("_userId")
      if(y!=null) {
         this.$router.go(-1);
      }

    }
  };
</script>

<style scoped>
@import url("../assets/css/page/registration.css");
</style>