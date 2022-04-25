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
            <i class="content__search-icon fas fa-search"></i>
            <input
              class="content__search-input"
              placeholder="Vui lòng nhập theo mã, tên hoặc số điện thoại"
            />
          </div>
          <div class="combobox combobox__department">
            <input class="combobox__input" value="Tất cả danh mục" />
            <i class="fas fa-chevron-down combobox__icon"></i>
            <ul class="combobox__content">
              <li class="combobox__content-item combobox__content-item-selected">
                <i class="combobox__item-icon combobox__item-icon-selected fas fa-check"></i>
                <span class="combobox__item-value combobox__item-value-selected">
                  Tất cả phòng
                  ban
                </span>
              </li>
              <li class="combobox__content-item">
                <i class="fas fa-check combobox__item-icon"></i>
                <span class="combobox__item-value">Phòng hành chính</span>
              </li>
              <li class="combobox__content-item">
                <i class="fas fa-check combobox__item-icon"></i>
                <span class="combobox__item-value">Phòng kế toán</span>
              </li>
              <li class="combobox__content-item">
                <i class="fas fa-check combobox__item-icon"></i>
                <span class="combobox__item-value">Phòng nhân sự</span>
              </li>
            </ul>
          </div>

          <div class="combobox combobox__position">
            <input class="combobox__input" value="Tất cả các nhà cung cấp" />
            <i class="fas fa-chevron-down combobox__icon"></i>
            <ul class="combobox__content">
              <li class="combobox__content-item combobox__content-item-selected">
                <i class="combobox__item-icon combobox__item-icon-selected fas fa-check"></i>
                <span class="combobox__item-value combobox__item-value-selected">
                  Tất cả các vị
                  trí
                </span>
              </li>
              <li class="combobox__content-item">
                <i class="fas fa-check combobox__item-icon"></i>
                <span class="combobox__item-value">Trưởng phòng</span>
              </li>
              <li class="combobox__content-item">
                <i class="fas fa-check combobox__item-icon"></i>
                <span class="combobox__item-value">Nhân viên</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="content__bottom-right">
          <div class="btn-delete">
            <i class="btn-icon fas fa-trash-alt"></i>
          </div>
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
            <tr class="list-row" v-for="product in Products1.data" :key="product.productId" :id="product.productId">
              <td class="list-cell">
                <div class="list-cell-check">
                  <i class="fa-solid fa-delete-left" @click="clickCheckboxRowProduct" ></i>
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

    <FormProduct v-if="IsShowForm" :formMode="formMode" :productId="productId"/>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  import FormProduct from "../../components/areas/component/FormProduct.vue";
  export default {
    name: "product-admin",
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
        productId: '',
      };
    },

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

      showFormProduct() {
        this.handleToggleProductForm(true);
        this.productId = 'NULL'
      },

      refreshListProduct(){
        this.handleGetProducts(this.params);
      },

      updateProductById(e) {
        let productId = e.target.parentElement.parentElement.parentElement.getAttribute("id")
        this.productId = productId;
        this.formMode = 2;
        this.handleToggleProductForm(true);

      },

      clickCheckboxRowProduct(e) {
        e.target.classList.toggle("cart-checkbox-selected");
        let id = e.target.parentElement.parentElement.parentElement.getAttribute("id");
         axios
              .delete(`https://localhost:44321/api/v1/Products/${id}`)
              .then((res) => {0
                console.log(res);
                this.handleGetProducts(this.params);
              })
              .catch((err) => {
                console.log(err);
              });
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
      this.handleGetProducts(this.params);
    },
    updated() {
      this.clickPaginationItem();
    },
  };
</script>

<style>
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