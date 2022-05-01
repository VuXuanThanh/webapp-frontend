<template>
  <div class="product-admin">
    <div class="content__functional">
      <div class="content__top">
        <p class="content__top-text">Danh sách sản phẩm</p>
        <button class="button content__top-button" @click="showFormProduct">
          <i class="button__icon fas fa-user-plus"></i>
          <span class="button__text">Thêm sản phẩm</span>
        </button>
      </div>

      <div class="content__bottom">
        <div class="content__bottom-left">
          <div class="content__search">
            <i class="content__search-icon fas fa-search" @click="searchProductByName"></i>
            <input
              class="content__search-input"
              placeholder="Vui lòng nhập theo tên sản phẩm để tìm kiếm"
            />
          </div>
        </div>

        <div class="content__bottom-right">
          <div class="btn-refresh" @click="refreshListProduct">
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
              <th class="list-heading">Mã sản phẩm</th>
              <th class="list-heading">Tên sản phẩm</th>
              <th class="list-heading">Giá gốc</th>
              <th class="list-heading">Tình trạng</th>
              <th class="list-heading">Chất liệu</th>
              <th class="list-heading">Phụ kiện</th>
              <th class="list-heading">Trọng lượng</th>
              <th class="list-heading">Kích thước</th>
              <th class="list-heading">Nguồn gốc</th>
              <th class="list-heading">Danh mục</th>
              <th class="list-heading">Giá bán</th>
            </tr>
          </thead>

          <tbody class="list-body">
            <tr
              class="list-row"
              v-for="product in Products1.data"
              :key="product.productId"
              :id="product.productId"
            >
              <td class="list-cell">
                <div class="list-cell-check">
                  <i class="fa-solid fa-delete-left" @click="clickCheckboxRowProduct"></i>
                  <i class="fa-solid fa-user-pen icon-update" @click="updateProductById"></i>
                </div>
              </td>
              <td class="list-cell">{{product.productId}}</td>
              <td class="list-cell">{{product.productName}}</td>
              <td class="list-cell">{{formatPrice(product.priceOrgin)}}</td>
              <td class="list-cell">{{getStatusProduct(product.statusProduct)}}</td>
              <td class="list-cell">{{product.material}}</td>
              <td class="list-cell">{{product.accessory}}</td>
              <td class="list-cell">{{product.weights}}</td>
              <td class="list-cell">{{product.dimension}}</td>
              <td class="list-cell">{{product.orgin}}</td>
              <td class="list-cell">{{product.categoryName}}</td>
              <td class="list-cell">{{formatPrice(product.priceDeal)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <footer class="footer">
      <v-pagination v-model="page" :length="Products1.totalPage" :total-visible="7"></v-pagination>
    </footer>

    <FormProduct v-if="IsShowForm" :formMode="formMode" :productId="productId" />

    <div class="dialog" v-if="isShowDialog">
      <div class="dialog__content">
        <div class="dialog__inner">
          <i class="dialog__inner-icon-exit fas fa-times"></i>
          <div class="dialog__inner-title">Xác nhận xóa</div>
          <div class="dialog__inner-message">
            <i class="dialog__inner-icon fas fa-exclamation-triangle"></i>
            <div class="dialog__inner-text">Bạn chắc chắn muốn xóa bản ghi này</div>
          </div>
          <div class="dialog__inner-button">
            <button class="button dialog__inner-button-diabled" @click="confirmDeleteProduct">Hủy</button>
            <button class="button dialog__inner-button-confirm" @click="confirmDeleteProduct">Xóa</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 
  import axios from "axios";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  import FormProduct from "../../components/areas/component/FormProduct.vue";
  import { validation } from "../../mixins/validation";
  import { toast } from "../../mixins/showToast";
  export default {
    name: "product-admin",
    data() {
      return {
        page: 1,

        params: {
          type: 0,
          categoryId: "",
          productName: "",
          priceMin: 0,
          priceMax: 0,
          brandId: "",
          pageSize: 24,
          pageIndex: 1,
        },

        isShowForm: false,
        formMode: 1,
        productId: "",

        isShowDialog: false,
      };
    },
    mixins: [validation, toast],

    components: {
      FormProduct,
    },
    computed: {
      ...mapGetters([
        "Categories",
        "Products1",
        "CategoryId",
        "ProductImages",
        "IsShowForm",
        "UserMsg"
      ]),
    },
    methods: {
      ...mapActions([
        "handleGetCategories",
        "handleGetProductsByCategory",
        "handleGetImageByProduct",
        "handleGetProducts",
        "handleToggleProductForm",
      ]),
      ...mapMutations([
        "getCategories",
        "getProductsByCategory",
        "getImageByProduct",
      ]),

      searchProductByName(e) {
        let searchString = e.target.parentElement.querySelector("input").value;
        if (searchString) {
          this.params.type = 4;
          this.params.productName = searchString;
          this.handleGetProducts(this.params);
        }
      },

      showFormProduct() {
        this.handleToggleProductForm(true);
        this.productId = "NULL";
      },

      refreshListProduct() {
        this.params.type = 0;
        this.handleGetProducts(this.params);
      },

      updateProductById(e) {
        let productId =
          e.target.parentElement.parentElement.parentElement.getAttribute("id");
        this.productId = productId;
        this.formMode = 2;
        this.handleToggleProductForm(true);
        this.handleGetProducts(this.params);
      },

      clickCheckboxRowProduct(e) {
        this.productId = e.target.parentElement.parentElement.parentElement.getAttribute("id");
        this.isShowDialog = true;
      },

      confirmDeleteProduct(e) {
        let me = this;
        let className = e.target.className;
        console.log(className)
        if (className.includes("dialog__inner-button-diabled"))
          this.isShowDialog = false;
        else {
          axios
            .delete(`https://localhost:44321/api/v1/Products/${me.productId}`, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res);
              me.isShowDialog = false;
              me.handleGetProducts(me.params);
              me.showSuccessToast('Đã xóa thành công');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },

      formatPrice(price) {
        return price.toLocaleString("vi", { style: "currency", currency: "VND" });
      },

      getStatusProduct(status) {
        let result = status == 1 ? "Còn hàng" : "Hết hàng";
        return result;
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
            me.handleGetProducts(me.params);
          };
        });
      },
    },

    created() {
      let x = this.handleGetProducts(this.params);
      console.log('Gia tri tu action', x);
    },
    mounted() {
      console.log('Loi cho nguoi dung',this.UserMsg)
    },
    updated() {
      this.clickPaginationItem();
    },
  };
</script>


<style scoped>

@import url('../../assets/areas/css/main.css');
.combobox__content-item {
   padding: 16px !important;
}
.list-cell-check i {
  cursor: pointer;
}
.product-admin {
  padding: 8px;
}
</style>
<style>
.content {
  padding: 0 !important;
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