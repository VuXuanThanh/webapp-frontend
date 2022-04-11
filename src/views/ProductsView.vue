<template>
  <div class="grid wide products-view">
    <TheSliderBrand />

    <div class="row products">
      <div class="col l-2">
        <div class="category">
          <div class="category__heading">Danh mục</div>
          <div class="category__list">
            <!-- <span class="category__list-item category__item-active">DMSP</span> -->
             <div
              class="category__list-item"
              :keyId="categoryFirst.categoryId"
            >
              <span :keyId="categoryFirst.categoryId" class="category-item category__item-active"
                @click="clickCategoryItem">{{categoryFirst.categoryName}}</span>
            </div>
            <div
              class="category__list-item"
            
              v-for="(item, index) in Categories"
              :keyId="index"
              :key="item.categoryId"
            >
              <span :keyId="item.categoryId" v-if="index>0" class="category-item "
                 @click="clickCategoryItem">{{item.categoryName}}</span>
            </div>
          </div>
        </div>

        <div class="category filter">
          <div class="category__heading">Bộ lọc</div>

          <div class="filter__type">
            <p class="filter__type-text">Màu sắc</p>
            <ul class="filter__list">
              <li class="filter__item">
                <span class="filter__item-checkbox"></span>
                <span class="filter__item-text">đen</span>
              </li>
              <li class="filter__item">
                <span class="filter__item-checkbox"></span>
                <span class="filter__item-text">đỏ</span>
              </li>
              <li class="filter__item">
                <span class="filter__item-checkbox"></span>
                <span class="filter__item-text">xanh</span>
              </li>
            </ul>
          </div>

          <div class="filter__button">
            <button class="button button__apply">Áp dụng</button>
            <button class="button button__clear">Bỏ lọc</button>
          </div>
        </div>
      </div>

      <div class="col l-10">
        <div class="row">
          <div class="col l-12" style="font-size: 1.6rem">Sắp xếp theo</div>
        </div>
        <div class="row">
          <Product v-for="item in Products.data" :key="item.ProductId" :product="item" />
        </div>
      </div>
    </div>
    <!-- {{ProductImages}} -->
    <v-pagination v-model="page" :length="Products.totalPage" :total-visible="7"></v-pagination>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from "vuex";
  import TheSliderBrand from "../components/layout/TheSliderBrand.vue";
  import Product from "../components/base/Product.vue";

  export default {
    name: "ProductsView",
    components: {
      TheSliderBrand,
      Product,
    },
    data() {
      return {
        page: 1,
        posts: [],

        paginationSize: {
         
          pageSize: 24,
          pageIndex: 1
        },

        /** Parameters for pagination */
        params: {
          type: 1,
          categoryId: '',
          pageSize: 24,
          pageIndex: 1
        }
      };
    },
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

      categoryFirst(){
        let result = Object.assign({}, this.Categories[0])
        return result;
      }
    },
    methods: {
      ...mapActions([
        "handleChangeUserName",
        "handleChangeAge",
        "handleGetPosts",
        "handleGetCategories",
        "handleGetProductsByCategory",
        "handleGetImageByProduct",
      ]),
      ...mapMutations([
        "changUserName",
        "changeAge",
        "getCategories",
        "getProductsByCategory",
        "getImageByProduct",
      ]),

      /** Load products by category */
      getProductsByCategory(params) {
        // let x = this.Categories;

        this.handleGetProductsByCategory(params);
      },
      /** Events click category item */
      clickCategoryItem(e) {
        e.stopPropagation();
        let me = this;
        let element = e.target;
        let elementSelected = me.$el.querySelectorAll(".category-item");
        elementSelected.forEach((item) => {
          item.classList.remove("category__item-active");
        });
        element.classList.add("category__item-active");
        let categoryId = element.getAttribute("keyId");
        console.log('categoryId', categoryId);
        me.params.categoryId = categoryId;
        me.getProductsByCategory(me.params);
      },

      /** Events click pagination item */
      clickPaginationItem() {
        let me = this;
        let items = me.$el.querySelectorAll('.v-pagination__item');
        items.forEach(item => {
          item.onclick = (element)=> {
            console.log('phan trang', element.target);
            let pageIndex = me.$el.querySelector('.v-pagination__item--active').innerHTML;
            me.params.pageIndex = pageIndex;
            me.getProductsByCategory(me.params);
          }
        });
      }
    },
    created() {
      this.handleGetCategories();
    },
    mounted() {
      let me = this;
      let categoryId = "";
      me.params.categoryId = categoryId;
      me.getProductsByCategory(me.params);
      me.handleGetImageByProduct();

    },
    updated() {
       this.clickPaginationItem();
      // let me = this;
      // default active first category
    },
  };
</script>

<style scoped>
@import url("../assets/css/page/products.view.css");
</style>

<style>
.theme--light.v-pagination .v-pagination__item--active {
  color: #fff;
  background: var(--hover-color) !important;
}
.v-pagination__item {
  font-size: 1.4rem !important;
  font-weight: 600;
}
.v-pagination {
  margin-top: 20px !important;
  position: relative;
  left: 100px;
}
.v-pagination li {
  margin: 0 5px;
}
</style>

