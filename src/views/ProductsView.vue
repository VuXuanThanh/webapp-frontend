<template>
  <div class="grid wide products-view">
    <TheSliderBrand />

    <div class="row products">
      <div class="col l-2">
        <div class="category">
          <div class="category__heading">Danh mục</div>
          <div class="category__list">
            <a href class="category__list-item category__item-active">Bếp điện</a>
            <a href class="category__list-item">Nồi chiên không dầu</a>
            <a href class="category__list-item">Nồi cơm điện</a>
            <a href class="category__list-item">Bộ nồi chảo</a>
            <a href class="category__list-item">Sản phẩm khác</a>
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
          <div class="col l-12">Sắp xếp theo</div>
        </div>
        <div class="row">
          <div class="col l-2-4">
            <Product />
          </div>
          <div class="col l-2-4">
            <Product />
          </div>
          <div class="col l-2-4">
            <Product />
          </div>
          <div class="col l-2-4">
            <Product />
          </div>
          <div class="col l-2-4">
            <Product />
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
          <div class="col l-2-4">
            <Product></Product>
          </div>
        </div>
      </div>
    </div>

    <v-pagination v-model="page" :length="20" :total-visible="7"></v-pagination>
  </div>
</template>

<script>
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
        product: {
          ProductId: "1000",
          ProductName: "dien thoai",
        },
        products: [
          {
            ProductId: "1001",
            ProductName: "dien thoai",
          },
          {
            ProductId: "1002",
            ProductName: "dien thoai",
          },
          {
            ProductId: "101",
            ProductName: "dien thoai",
          },
        ],
      };
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

