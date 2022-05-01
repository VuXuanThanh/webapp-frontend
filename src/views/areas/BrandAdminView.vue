<template>
  <div class="brand-admin">
    <div class="content__functional">
      <div class="content__top">
        <p class="content__top-text">Danh sách nhà cung cấp</p>
        <button class="button content__top-button">
          <i class="button__icon fas fa-user-plus"></i>
          <span class="button__text" @click="showFormBrand">Thêm nhà cung cấp</span>
        </button>
      </div>

      <div class="content__bottom">
        <div class="content__bottom-left">
          <div class="content__search">
            <i class="content__search-icon fas fa-search"></i>
            <input
              class="content__search-input"
              placeholder="Tìm kiếm nhà cung cấp"
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
              <th class="list-heading">Mã nhà cung cấp</th>
              <th class="list-heading">Tên nhà cung cấp</th>
              <th class="list-heading">URL hình ảnh</th>
            </tr>
          </thead>

          <tbody class="list-body">
            <tr>
              <td><div background>
                </div></td>
            </tr>
            <tr class="list-row" v-for="brand in Brands" :key="brand.brandId" :id="brand.brandId">
              <td class="list-cell">
                <div class="list-cell-check">
                  <i class="fa-solid fa-delete-left list-cell-check-icon" @click="clickCheckboxRowBrand"></i>
                  <i class="fa-solid fa-user-pen icon-update list-cell-check-icon"
                  @click="updateBrandById" ></i>
                </div>
              </td>
              <td class="list-cell">{{brand.brandId}}</td>
              <td class="list-cell">{{brand.brandName}}</td>
              <td class="list-cell">
                <div class="brand-img" v-bind:style="{ 'background-image': 'url(' + brand.imageBrand + ')' }">

                </div>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   <FormBrand  v-if="IsShowForm" :formMode="formMode" :brandId="brandId"/>
  </div>
</template>

<script>
  import FormBrand from '../../components/areas/component/FormBrand.vue'
  import axios from "axios";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name: "brand-admin",
    data() {
      return {
        page: 1,

        params: {
          type: 0,
          productName: '',
          pageSize: 24,
          pageIndex: 1,
        },

        isShowForm: false,
        formMode: 1,
        brandId: '',
      };
    },

    components: {
        FormBrand
    },
    computed: {
      ...mapGetters([
        "Categories",
        "Brands",
        "BrandId",
        "BrandImages",
        "IsShowForm",
      ]),
    },
    methods: {
      ...mapActions([
        "handleGetCategories",
        "handleGetImageByBrand",
        "handleGetBrands",
        "handleToggleProductForm",
      ]),
      ...mapMutations([
        "getCategories",
        "getbrandsBybrand",
        "getImageBybrand",
      ]),


      showFormBrand() {
        this.handleToggleProductForm(true);
        this.brandId = 'NULL'
      },

      refreshListbrand(){
        this.handleGetCategories();
      },

      updateBrandById(e) {
        let brandId = e.target.parentElement.parentElement.parentElement.getAttribute("id")
        this.brandId = brandId;
        this.formMode = 2;
        this.handleToggleProductForm(true);

      },

      clickCheckboxRowBrand(e) {
        console.log('skdksdks')
        e.target.classList.toggle("cart-checkbox-selected");
        let id = e.target.parentElement.parentElement.parentElement.getAttribute("id");
         axios
              .delete(`https://localhost:44321/api/v1/Brands/${id}`, {withCredentials: true})
              .then((res) => {
                console.log(res);
                this.handleGetBrands();
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
            me.handleGetbrands(me.params);
          };
        });
      },
    },

    created() {
      this.handleGetBrands();
    },
    updated() {
      this.clickPaginationItem();
    },
  };
</script>

<style scoped>
@import url('../../assets/areas/css/main.css');
</style>
<style >
.list-cell-check-icon {
  cursor: pointer;
  font-size: 20px;
}
.brand-img {
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