<template>
  <div class="registration">
      <div class="form">
          <div class="form-title">Đăng kí thành viên</div>
          
          <div class="form-group">
              <div class="form-label form-label-mark">Địa chỉ Email</div>
              <input type="text" name="Email" class="form-control" @blur="validateInput">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label form-label-mark">Số điện thoại</div>
              <input type="text" name="PhoneNumber" class="form-control" @blur="validateInput">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label form-label-mark">Tên</div>
              <input type="text" name="Required" class="form-control" @blur="validateInput">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label">Họ và đệm</div>
              <input type="text" name="LastName" class="form-control" @blur="validateInput">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label form-label-mark">Mật khẩu</div>
              <input type="password" name="Password" class="form-control" @blur="validateInput">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

          <div class="form-group">
              <div class="form-label form-label-mark">Nhập lại mật khẩu</div>
              <input type="password" name="PasswordConfirm" class="form-control" @blur="validateInput">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

          <button class="form-button" @click="registrateUser">
              Đăng kí
          </button>

          <div class="form-information">
              Bạn đã có tài khoản Lyoko? <router-link to="/" class="form-information-link">Đăng nhập</router-link>
              <div class="form-information-security">
                  <input type="checkbox">
                  Tôi đồng ý với <a href="">Bảo mật</a> và <a href="">Điều khoản hoạt động</a> của Lyoko.
              </div>
          </div>

          
      </div>
  </div>
</template>

<script>
import {validation} from '../mixins/validation'
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    mixins: [validation],
      computed: {
      ...mapGetters([
        "UserName",
        "Age",
        "Posts",
        "Categories",
        "Products",
        "CategoryId",
        "ProductImages",
      ]),

    },
    methods: {
      ...mapActions([
       "handleRegistration"
      ]),
      ...mapMutations([
       
      ]),
        registrateUser(){
            console.log('validate truoc khi submit form');

            let isValid =this.validate();
            if(isValid) {
                console.log('valite hop le');
            }
            else { 
                console.log('sai roi')
            }
            // this.handleRegistration();
        }
    },

    created() {
        window.scrollTo(0,0);

    },
    mouted() {
    }
}
</script>

<style scoped>
@import url('../assets/css/page/registration.css');
</style>