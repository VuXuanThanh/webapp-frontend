<template>
  <div class="registration">
      <div class="form">
          <div class="form-title">Đăng kí thành viên</div>
          
          <div class="form-group">
              <div class="form-label">Địa chỉ Email</div>
              <input type="text" class="form-control Email">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label">Số điện thoại</div>
              <input type="text" class="form-control PhoneNumber">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label">Tên</div>
              <input type="text" class="form-control CustomerName">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label">Họ và đệm</div>
              <input type="text" class="form-control LastName">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

           <div class="form-group">
              <div class="form-label">Mật khẩu</div>
              <input type="password" class="form-control password">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

          <div class="form-group">
              <div class="form-label">Nhập lại mật khẩu</div>
              <input type="password" class="form-control password">
              <span class="form-message">Vui lòng nhập lại trường này</span>
          </div>

          <button class="form-button">
              Đăng kí
          </button>

          <div class="form-information">
              Bạn đã có tài khoản Lyoko? <router-link to="/" class="form-information-link">Đăng nhập</router-link>
              <div class="form-information-security">
                  Tôi đồng ý với <a href="">Bảo mật</a> và <a href="">Điều khoản hoạt động</a> của Lyoko.
              </div>
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