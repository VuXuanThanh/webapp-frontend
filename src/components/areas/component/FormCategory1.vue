<template>
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__body">
      <div class="modal__inner">
        <div class="modal-form">
          <span class="modal__title">thông tin danh mục</span>
          <div class="modal__main">
            <div class="modal__main-form">
              <div class="modal__main-avartar"></div>

              <div class="form-scrollbar" id="form-scrollbar">
                <form action id="form" class="form" method="post">
                  <h3 class="form-heading">A. Thông tin chung</h3>
                  <div class="form-bar"></div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label form-control-required">Tên danh mục</label>
                      <input
                        v-model="item.categoryName"
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
                      <label for="name" class="form-label">Hình ảnh</label>
                      <input
                        v-model="item.categoryImage"
                        type="text"
                        class="form-control"
                        placeholder="nhập URL hình ảnh"
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
      <!-- <div class="dialog">
        <div class="dialog__content">
          <div class="dialog__inner">
            <i class="dialog__inner-icon-exit fas fa-times"></i>
            <div class="dialog__inner-title">Xác nhận xóa</div>
            <div class="dialog__inner-message">
              <i class="dialog__inner-icon fas fa-exclamation-triangle"></i>
              <div class="dialog__inner-text">Bạn chắc chắn muốn xóa bản ghi này</div>
            </div>
            <div class="dialog__inner-button">
              <button class="button dialog__inner-button-diabled">Hủy</button>
              <button class="button">Xóa</button>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapActions, mapGetters } from "vuex";
  import { validation } from "../../../mixins/validation";
  export default {
    name: "FormCategory",
    data() {
      return {
        isShow: true,

        item: {
          categoryId: "",
          categoryName: "",
          imageCategory: "",
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
        "Brands",
      ]),
    },
    methods: {
      ...mapActions([
        "handleGetCategories",
        "handleGetProductsByCategory",
        "handleGetImageByProduct",
        "handleGetProducts",
        "handleToggleProductForm",
        "handleGetBrands",
        "handleGetProductById",
      ]),

      saveCategory() {
        let me = this;
        let isValid = me.validate();
        // console.log(this.product)

        if (isValid) {
          if (me.formMode == 1) {
            console.log(me.item);

            axios
              .post(`https://localhost:44321/api/v1/Categories`, me.item, {
                withCredentials: true,
              })
              .then((res) => {
                console.log(res);
                me.handleToggleProductForm(false);
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            console.log(me.product2);
            axios
              .put(`https://localhost:44321/api/v1/Categories`, me.item, {
                withCredentials: true,
              })
              .then((res) => {
                console.log(res);
                me.handleToggleProductForm(false);
              })
              .catch((err) => {
                console.log(err);
              });
          }
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
    },

    created() {
      console.log("form product created");
      this.handleGetBrands();
      this.handleGetCategories();
    },
    mounted() {
      let me = this;
  
      console.log("ma san pham", me.categoryId);
      if (me.categoryId != null) {
        // get product by id
        axios
          .get(`https://localhost:44321/api/v1/Categories/${me.categoryId}`)
          .then((res) => {
            console.log(res.data);
            for (const key in me.item) {
              me.item[key] = res.data[key];
            }

            console.log(me.item);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  };
</script>

<style scoped>
@import url('../../../assets/areas/css/component/dialog.css');
</style>