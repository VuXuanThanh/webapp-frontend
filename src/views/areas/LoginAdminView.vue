<template>
  <div class="registration" :status="UserId" >
    <div class="form">
      <div class="form-title">Đăng nhập quản trị Lyoko </div>

      <div class="user-error" v-if="false">
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
          isManage: 1
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
                alert('Thông tin đăng nhập không chính xác')
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
@import url('../../assets/css/base/base.css');
.registration {
   display: flex;
   padding: 32px;
}
.form {
  margin: 0 auto;
  min-width: 500px;
  display: flex;
  gap: 2px;
  flex-direction: column;
 
  

}
.form-title {
  font-size: 2.5rem;
  margin-bottom: 8px;
  font-weight: 700;
  color: var(--primary-color);

}
.form-group {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  margin-top: 30px;

}
.form-label {
  font-weight: 500;

}
.form-label-mark::after {
  content: "*";
  color: red;
  margin-left: 3px;
  font-weight: 600;
}
.form-control {
  width: 100%;
  border: 1px solid #D3D7DE;
  height: 40px;
  padding: 8px 20px;
  border-radius: 8px;

}
.form-message {
  position: absolute;
  left: 0;
  top: 100%;
  font-size: 1.3rem;
  color: red;
  display: none;

}
.form-message-display {
  display: block;
}
.form-button {
  margin-top: 25px;
  font-size: 1.5rem;
  width: 100%;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
  height: 40px;
  background: linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38);
}

.form-information {
  font-size: 1.5rem;
  margin-top: 25px;
}
.form-information-link {
  color: var(--primary-color);
  font-weight: 600;
}
.form-information-security {
  margin-top: 40px;
}
</style>