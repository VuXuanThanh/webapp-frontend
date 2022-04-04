<template>
  <div class="registration">
      <div class="form">
          <div class="form-title">Đăng nhập</div>
          
          <div class="form-group">
              <div class="form-label">Địa chỉ Email</div>
              <input type="text" class="form-control Email">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label">Mật khẩu</div>
              <input type="password" class="form-control password">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>


          <button class="form-button">
              Đăng nhập
          </button>

          <div class="form-information">
              Bạn quên mật khẩu? <router-link to="/" class="form-information-link">Quên mật khẩu</router-link>
    
          </div>

          
      </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
@import url('../assets/css/page/registration.css');
</style>