<template>
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__body">
      <div class="modal__inner">
        <div class="modal-form">
          <span class="modal__title">thông tin người dùng</span>
          <div class="modal__main">
            <div class="modal__main-form">
              <div class="modal__main-avartar"></div>

              <div class="form-scrollbar" id="form-scrollbar">
                <form action id="form" class="form" method="post">
                  <h3 class="form-heading">A. Thông tin chung</h3>
                  <div class="form-bar"></div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label form-control-required">Tên người dùng</label>
                      <input
                        v-model="item.userName"
                        type="text"
                        class="form-control"
                        placeholder
                        name="Required"
                        required="required"
                        @blur="validateInput"
                      />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="name" class="form-label form-control-required">Email</label>
                      <input
                        v-model="item.email"
                        type="text"
                        class="form-control"
                        name="Email"
                        required="Required"
                        @blur="validateInput"
                      />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label">Họ và đệm</label>
                      <input
                        v-model="item.lastName"
                        type="text"
                        class="form-control"
                        placeholder
                        required="required"
                        @blur="validateInput"
                      />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="name" class="form-label">Tên</label>
                      <input
                        v-model="item.categoryImage"
                        type="text"
                        class="form-control"
                        placeholder
                        name
                        required="Required"
                        @blur="validateInput"
                      />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="name" class="form-label form-control-required">Mật khẩu</label>
                      <input
                        v-model="item.passwords"
                        type="text"
                        class="form-control"
                        placeholder="nhập URL hình ảnh"
                        name="Password"
                        required="Required"
                        @blur="validateInput"
                      />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label">Nhóm tài khoản</label>
                      <div class="combobox combobox__position">
                        <input
                          class="form-control combobox__input combobox__input-user-role"
                          name="Required"
                          value
                          @blur="validateInput"
                          id
                        />
                        <div class="form-message">
                          <p>Vui long dien truong nay</p>
                          <div class="square__rotate"></div>
                        </div>
                        <i class="fas fa-chevron-down combobox__icon" @click="showComboboxForm"></i>
                        <ul class="combobox__content">
                          <li
                            class="combobox__content-item"
                            @click="chooseItemCombobox"
                            v-for="item in Roles"
                            :key="item.roleId"
                            :id="item.roleId"
                          >
                            <span class="combobox__item-value">{{item.roleName}}</span>
                          </li>
                        </ul>
                        <div class="form-message">
                          <p>Vui long dien truong nay</p>
                          <div class="square__rotate"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal__main-operation">
              <button class="button button-modal button-second">
                <i class="button__icon fas fa-times"></i>
                <span class="button__text" @click="closeForm">Hủy</span>
              </button>
              <button class="button button-modal">
                <i class="button__icon fas fa-user-plus"></i>
                <span class="button__text" @click="saveCategory">Lưu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapActions, mapGetters } from "vuex";
  import { validation } from "../../../mixins/validation";
  export default {
    name: "FormUsers",
    data() {
      return {
        isShow: true,

        item: {
          usersId: "",
          userName: "",
          email: "",
          firstName: "",
          lastName: "",
          passwords: "",
          roleId: "",
          roleName: "",
          isActive: true,
        },
      };
    },
    mixins: [validation],

    props: {
      formMode: Number,
      categoryId: String,
    },
    computed: {
      ...mapGetters([
        "Categories",
        "Products",
        "CategoryId",
        "ProductImages",
        "IsShowForm",
        "Roles",
      ]),
    },
    methods: {
      ...mapActions([
        "handleGetCategories",
        "handleGetProductsByCategory",
        "handleGetImageByProduct",
        "handleGetUsers",
        "handleToggleProductForm",
        "handleGetRoles",
      ]),

      saveCategory() {
        let me = this;
        let isValid = me.validate();
        // console.log(this.product)

        if (isValid) {
            me.item.roleId = me.$el.querySelector('.combobox__input-user-role').getAttribute('id');
            axios
              .post(`https://localhost:44321/api/v1/Users`, me.item, {
                withCredentials: true,
              })
              .then((res) => {
                console.log(res);
                me.handleGetUsers();
                me.handleToggleProductForm(false);
              })
              .catch((err) => {
                console.log(err);
              });
  
          }
        
      },

      closeForm() {
        this.handleToggleProductForm(false);
      },

      showComboboxForm(e) {
        let combobox = e.target.parentElement.querySelector(".combobox__content");
        combobox.classList.toggle("combobox__content-display");
        console.log(combobox);
      },
      chooseItemCombobox(e) {
        let element = e.target;
        var value, id, input;
        if (element.tagName == "SPAN") {
          value = element.innerHTML;
          id = element.parentElement.getAttribute("id");
          input =
            element.parentElement.parentElement.parentElement.querySelector(
              ".combobox__input"
            );
          console.log(input);
          input.value = value;
          input.setAttribute("id", id);
          element.parentElement.parentElement.classList.remove(
            "combobox__content-display"
          );
        } else {
          value = element.querySelector("span").innerHTML;
          id = element.getAttribute("id");
          input =
            element.parentElement.parentElement.querySelector(".combobox__input");
          element.parentElement.classList.remove("combobox__content-display");
          input.value = value;
          input.setAttribute("id", id);
        }
      },
    },

    created() {
      console.log("form product created");
      this.handleGetRoles();
    },
    mounted() {
      // let me = this;
      // console.log("ma san pham", me.categoryId);
      // if (me.categoryId != null) {
      //   // get product by id
      //   axios
      //     .get(`https://localhost:44321/api/v1/Categories/${me.categoryId}`)
      //     .then((res) => {
      //       console.log(res.data);
      //       for (const key in me.item) {
      //         me.item[key] = res.data[key];
      //       }
      //       console.log(me.item);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
    },
  };
</script>

<style scoped>
@import url("../../../assets/areas/css/component/dialog.css");
</style>