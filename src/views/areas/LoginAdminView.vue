<template>
  <div class="registration" :status="UserId">
    <div class="form">
      <div class="form-title">Đăng nhập quản trị viên </div>

      <div class="user-error" v-if="IsError">
        <div class="user-error-icon">
          <i class="fa-solid fa-triangle-exclamation error-icon-error"></i>
        </div>
        <div class="user-error-message">{{UserMsg}}</div>
      </div>

      <div class="form-group">
        <div class="form-label form-label-mark">Tên đăng nhập</div>
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
import axios from "axios";
  import { mapActions, mapGetters, mapMutations } from "vuex";

  import { validation } from "../../mixins/validation";
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
      ...mapGetters([
        "UserId",
        "UserName",
        "Age",
        "IsError",
        "UserMsg",
        "IsLoggedIn",
      ]),

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
        let isValid = me.validate();
        if (isValid) {
            axios.post('https://localhost:44321/api/v1/Users/login', me.authenticateRequest, { withCredentials: true })
            .then(res=> {
                console.log(res)
                me.$router.push({path: '/admin/product'});
            })
            .catch(err=> {
                console.log(err.response);
            })
        }
      },

      getInforUser() {
        return this.$cookies.get("_userId");
      },
    },
    created() {
      window.scrollTo(0, 0);
      let me = this;
      
      if (me.$cookies.get("_userId")) {
        me.$router.go(-1);
      }
    },
    mounted() {
    

    },
    
  };
</script>

<style scoped>
@import url("../../assets/css/base/base.css");
@import url("../../assets/css/page/registration.css");
</style>