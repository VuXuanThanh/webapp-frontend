<template>
  <div class="category-admin">
    <div class="content__functional">
      <div class="content__top">
        <p class="content__top-text">Danh sách danh mục</p>
        <button class="button content__top-button">
          <i class="button__icon fas fa-user-plus"></i>
          <span class="button__text" @click="showFormCategory">Thêm danh mục</span>
        </button>
      </div>

      <div class="content__bottom">
        <div class="content__bottom-left">
          <div class="content__search">
            <i class="content__search-icon fas fa-search"></i>
            <input
              class="content__search-input"
              placeholder="Tìm kiếm danh mục"
            />
          </div>
          
       
        </div>

        <div class="content__bottom-right">
          <div class="btn-delete">
            <i class="btn-icon fas fa-trash-alt"></i>
          </div>
          <div class="btn-refresh">
            <i class="btn-icon fas fa-sync-alt"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="content__main">
      <div class="scrollbar" id="scrollbar">
        <table class="list">
          <thead class="list-header">
            <tr class="list-row">
              <th class="list-heading"></th>
              <th class="list-heading">Mã danh mục</th>
              <th class="list-heading">Tên danh mục</th>
              <th class="list-heading">URL hình ảnh</th>
            </tr>
          </thead>

          <tbody class="list-body">
            <tr>
              <td><div background>
                </div></td>
            </tr>
            <tr class="list-row" v-for="category in Categories" :key="category.categoryId" :id="category.categoryId">
              <td class="list-cell">
                <div class="list-cell-check">
                  <i class="fa-solid fa-delete-left list-cell-check-icon" @click="clickCheckboxRowCategory" ></i>
                  <i class="fa-solid fa-user-pen icon-update list-cell-check-icon" @click="updateCategoryById"></i>
                </div>
              </td>
              <td class="list-cell">{{category.categoryId}}</td>
              <td class="list-cell">{{category.categoryName}}</td>
              <td class="list-cell">
                <div class="category-img" v-bind:style="{ 'background-image': 'url(' + category.imageCategory + ')' }">

                </div>
              </td>
              
            </tr>
          </tbody>
        </table>
        <!-- <input type="file" name="filefield" multiple="multiple">
        <div class="category-img" :style="{ backgroundImage: `url(${require('@/assets/img/category/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png')})`}">
          
        </div> -->
      </div>
    </div>
    <FormCategory1 v-if="IsShowForm" :formMode="formMode" :categoryId="categoryId"/>
   
  </div>
</template>

<script>
  import FormCategory1 from '../../components/areas/component/FormCategory1.vue'
  import axios from "axios";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name: "category-admin",
    data() {
      return {
        page: 1,

        params: {
          type: 0,
          categoryId: "",
          pageSize: 24,
          pageIndex: 1,
        },

        isShowForm: false,
        formMode: 1,
        categoryId: '',
      };
    },

    components: {
      FormCategory1
    },
    computed: {
      ...mapGetters([
        "Categories",
        "categorys1",
        "CategoryId",
        "categoryImages",
        "IsShowForm",
      ]),
    },
    methods: {
      ...mapActions([
        "handleGetCategories",
        "handleGetcategorysByCategory",
        "handleGetImageBycategory",
        "handleGetcategorys",
        "handleToggleProductForm",
      ]),
      ...mapMutations([
        "getCategories",
        "getcategorysByCategory",
        "getImageBycategory",
      ]),


      showFormCategory() {
        this.handleToggleProductForm(true);
        this.categoryId = 'NULL'
      },

      refreshListCategory(){
        this.handleGetCategories();
      },

      updateCategoryById(e) {
        let categoryId = e.target.parentElement.parentElement.parentElement.getAttribute("id")
        this.categoryId = categoryId;
        this.formMode = 2;
        this.handleToggleProductForm(true);

      },

      clickCheckboxRowCategory(e) {
        e.target.classList.toggle("cart-checkbox-selected");
        let id = e.target.parentElement.parentElement.parentElement.getAttribute("id");
         axios
              .delete(`https://localhost:44321/api/v1/Categories/${id}`, {withCredentials: true})
              .then((res) => {0
                console.log(res);
                this.handleGetCategories();
              })
              .catch((err) => {
                console.log(err);
              });
      },


      /** Events click pagination item */
      clickPaginationItem() {
        let me = this;
        let items = me.$el.querySelectorAll(".v-pagination__item");
        items.forEach((item) => {
          item.onclick = (element) => {
            console.log("phan trang", element.target);
            let pageIndex = me.$el.querySelector(
              ".v-pagination__item--active"
            ).innerHTML;
            me.params.pageIndex = pageIndex;
            console.log(me.params);
            me.handleGetcategorys(me.params);
          };
        });
      },
    },

    created() {
      this.handleGetCategories();
    },
    updated() {
      this.clickPaginationItem();
    },
  };
</script>

<style scoped>
@import url('../../assets/areas/css/main.css');
</style>
<style>
.list-cell-check-icon {
  cursor: pointer;
  font-size: 20px;
}
.category-img {
  width: 240px;
  height: 240px;
  background-size: center center;
  background-repeat: no-repeat;
}
.theme--light.v-pagination .v-pagination__item--active {
  color: #fff;
  background: #fd5f32 !important;
}
.v-pagination__item {
  font-size: 14px !important;
  font-weight: 600;
}
.v-pagination {
  margin-top: 20px !important;
  position: relative;
}
.v-pagination li {
  margin: 0 5px;
}

.cart-checkbox {
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 1px solid #333;
}
.cart-checkbox-selected {
  position: relative;
}
.cart-checkbox-selected::after {
  content: "";
  position: absolute;
  /* display: none; */
  border-right: 2px solid var(--default-color);
  border-bottom: 2px solid var(--default-color);
  transform: rotate(45deg);
  left: 5px;
  width: 6px;
  height: 12px;
  top: 0px;
  color: #333;
}
</style>