<template>
  <div class="grid wide cart-view order-view">
    <div class="row">
      <div class="col l-12">
        <h1 class="cart-title">Đơn hàng</h1>
      </div>
    </div>

    <div class="row row-address">
      <div class="col l-12">
        <h1 class="form-title">Thông tin địa chỉ</h1>
      </div>
      <div class="col l-5">
        <div class="form-col">
          <div class="grid form-group">
            <div class="row form-row">
              <div class="col l-4">
                <span class="form-label">Tỉnh/thành phố</span>
              </div>
              <div class="col l-8">
                <div class="dropdown">
                  <input
                    type="text"
                    name="vocative"
                    placeholder="-Không chọn-"
                    class="form-control form-dropdown"
                    keyId
                  />
                  <div class="dropdown-icon-arrow icon-16" @click="showDropdownList"></div>
                  <div class="dropdown-list">
                    <div class="dropdown-bar">
                      <input type="text" placeholder="Tìm kiếm" class="dropdown-input" />
                      <i class="fa-solid fa-chevron-down dropdown-bar-search icon-16"></i>
                    </div>
                    <div class="dropdown-list-item">
                      <ul class="dropdown-provinces">
                        <li
                          v-for="item in provinces"
                          :id="item.ProvinceID"
                          :key="item.ProvinceID"
                          @click="clickDropdownItem"
                        >
                          {{item.ProvinceName}}
                          <div class="icon-16"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-col">
          <div class="grid form-group">
            <div class="row form-row">
              <div class="col l-4">
                <span class="form-label">Phường xã</span>
              </div>
              <div class="col l-8">
                <div class="dropdown">
                  <input
                    type="text"
                    name="vocative"
                    placeholder="-Không chọn-"
                    class="form-control form-dropdown"
                    keyid
                    @blur="setReceivingAddress"
                  />
                  <div class="dropdown-icon-arrow icon-16" @click="showDropdownList"></div>
                  <div class="dropdown-list">
                    <div class="dropdown-bar">
                      <input type="text" placeholder="Tìm kiếm" class="dropdown-input" />
                      <div class="dropdown-bar-search icon-16"></div>
                    </div>
                    <div class="dropdown-list-item">
                      <ul class="dropdown-wards">
                        <li
                          v-for="item in wards"
                          :id="item.WardID"
                          :key="item.WardID"
                          @click="clickDropdownItem"
                        >
                          {{item.WardName}}
                          <div class="icon-16"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-col">
          <div class="grid form-group">
            <div class="row form-row">
              <div class="col l-4">
                <span class="form-label form-label-mark">Địa chỉ</span>
              </div>
              <div class="col l-8">
                <input
                  type="text"
                  name="address"
                  class="form-control form-control"
                  v-model="order.receivingAddress"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col l-1"></div>

      <div class="col l-6">
        <div class="form-col">
          <div class="grid form-group">
            <div class="row form-row">
              <div class="col l-4">
                <span class="form-label">Quận/huyện</span>
              </div>
              <div class="col l-8">
                <div class="dropdown">
                  <input
                    type="text"
                    name="vocative"
                    placeholder="-Không chọn-"
                    class="form-control form-dropdown"
                    keyId
                  />
                  <div class="dropdown-icon-arrow icon-16" @click="showDropdownList"></div>
                  <div class="dropdown-list">
                    <div class="dropdown-bar">
                      <input type="text" placeholder="Tìm kiếm" class="dropdown-input" />
                      <div class="dropdown-bar-search icon-16"></div>
                    </div>
                    <div class="dropdown-list-item">
                      <ul class="dropdown-districts">
                        <li
                          v-for="item in districts"
                          :id="item.DistrictID"
                          :key="item.DistrictID"
                          @click="clickDropdownItem"
                        >
                          {{item.DistrictName}}
                          <div class="icon-16"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-col">
          <div class="grid form-group">
            <div class="row form-row">
              <div class="col l-4">
                <span class="form-label">Số nhà, đường phố</span>
              </div>
              <div class="col l-8">
                <input type="text" name="Zalo" class="form-control" @blur="setReceivingAddress" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col l-12">
        <h1 class="form-title">Thông tin bổ sung</h1>
      </div>
      <div class="col l-12">
        <div class="row">
          <div class="col l-12">
            <div class="order-note">
              <span class="form-title">Lưu ý khi vận chuyển</span>
              <input
                type="text"
                name="vocative"
                placeholder
                class="form-control"
                v-model="order.note"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-product-cart">
      <div class="col l-12">
        <span class="form-title">Thông tin sản phẩm</span>
      </div>
      <div class="col l-5">
        <div class="cart-product-name">
          <span class="cart-heading">Sản phẩm</span>
        </div>
      </div>
      <div class="col l-2">
        <span class="cart-heading">Đơn giá</span>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading">Số lượng</span>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading cart-heading-money">Thành tiền</span>
      </div>
    </div>

    <div class="row list-products" v-for="item in CartItems" :key="item.product.productId">
      <!-- <div class="col l-1">
          <div class="cart-checkbox "></div>
      </div>-->
      <div class="col l-5">
        <div class="cart-product-name" :keyId="item.product.productId">
          <span class="cart-heading">{{item.product.productName}}</span>
        </div>
      </div>
      <div class="col l-2">
        <span class="cart-heading cart-price-orgin" :price="item.price">{{formatPrice(item.price)}}</span>
      </div>
      <div class="col l-2 col-center">
        <span class="order-quanlity">{{item.quanlity}}</span>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading cart-money">{{formatPrice(item.price*item.quanlity)}}</span>
      </div>
    </div>

    <div class="row row-payment">
      <div class="col l-4">
        <div class="payment-discount">
          <input type="text" class="payment-discount-input" placeholder="Nhập mã giảm giá" />
          <button class="payment-discount-button" @click="loadData">Áp dụng</button>
        </div>
      </div>
      <div class="col l-2 col-center">
        <div class="payment-text">Tổng thanh toán:</div>
      </div>
      <div class="col l-2 col-center">
        <div class="payment-sum" :value="getTotalMoney">{{formatPrice(getTotalMoney)}}</div>
      </div>
      <div class="col l-2">
        <button class="payment-button" @click="confirmOrder">Đặt hàng</button>
      </div>

      <div class="col l-2">
        <button class="payment-remove-all">Hủy bỏ</button>
      </div>
    </div>

    <div class="row row-banking">
      <div class="col l-12">
        <span>
          <i>*Hiện tại website của chúng tôi áp dụng thanh toán khi nhận hàng. Thanh toán qua các ví điện tử và ngân hàng sẽ được phát triển sau.</i>
        </span>
      </div>
    </div>

    <Dialog :message="message" :status="isError" />
  </div>
</template>

<script>
  import Dialog from "../components/base/Dialog.vue";
  import axios from "axios";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name: "OrderView",
    data() {
      return {
        provinces: [],
        districts: [],
        wards: [],
        address: "",
        isError: false,
        message: "",

        // orders
        order: {
          ordersId: "",
          statusOrder: 0,
          payment: 0,
          total: 0,
          usersId: "",
          discountId: "",
          receivingAddress: "",
          note: "",
        },
      };
    },

    components: {
      Dialog,
    },

    computed: {
      ...mapGetters(["Product", "CartItems", "CartItem"]),

      getTotalMoney() {
        let value = this.CartItems.reduce((beforeValue, value) => {
          return beforeValue + value.price * value.quanlity;
        }, 0);
        return value;
      },
    },

    methods: {
      ...mapActions(["handleGetProductById", "handleGetCartByUserId", 'handleGetSumRecordsCart']),
      ...mapMutations([]),

      confirmOrder() {
        let me = this;
        console.log("order confirm");
        if (!me.order.receivingAddress) {
          console.log("vui long dien dia chi");
          me.message = "Vui lòng nhập các thông tin địa chỉ";
          me.isError = true;
          setTimeout(() => {
            me.isError = false;
          }, 3000);
        } else {
          let sumTotal = me.$el
            .querySelector(".payment-sum")
            .getAttribute("value");
          me.order.total = sumTotal;
          (me.order.usersId = me.$cookies.get("_userId")),
            console.log("call API", me.order);
          axios
            .post("https://localhost:44321/api/v1/Orders", me.order, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res);
              me.updateCartAfterOrder();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },

      updateCartAfterOrder() {
        let me = this;
        let userId = me.$cookies.get("_userId");
        let productItems = [];
        let productsSelected = me.$el.querySelectorAll(".list-products");
        if (productsSelected.length > 0) {
          productsSelected.forEach((row) => {
            let productId = row
              .querySelector(".cart-product-name")
              .getAttribute("keyid");
            let quanlity = row.querySelector(".order-quanlity").value;
            productItems.push({
              userId: userId,
              productId: productId,
              quanlity: quanlity,
              statusItem: true,
            });
          });

          console.log(productItems);

          // update cart items
          axios
            .patch("https://localhost:44321/api/v1/CartItems", productItems, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res);
              me.handleGetSumRecordsCart(userId);
              me.$router.replace({path: '/order-response'})
             
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("akjddss");
        }
      },

      // show dropdowh list
      showDropdownList(e) {
        let dropdown = e.target.parentElement;
        let dropdownList = dropdown.querySelector(".dropdown-list");
        //  open/cloase dropdown list
        dropdownList.classList.toggle("dropdown-list-display");
      },

      // provinces, district, ward dropdown
      clickDropdownItem(e) {
        let me = this;
        let value = e.target.innerText;
        let keyId = e.target.getAttribute("id");
        let input =
          e.target.parentElement.parentElement.parentElement.parentElement.querySelector(
            ".form-dropdown"
          );
        input.value = value;
        input.setAttribute("keyId", keyId);

        let dropTypes = e.target.parentElement.className;

        // load dependency district by province
        if (dropTypes == "dropdown-provinces") {
          console.log(1);
          let urlProvince = `https://online-gateway.ghn.vn/shiip/public-api/master-data/district`;
          axios
            .post(
              urlProvince,
              {
                province_id: Number(keyId),
              },
              {
                headers: {
                  token: `6b66cfca-af76-11ec-9bff-1e4c555e56e3`,
                },
              }
            )
            .then((res) => {
              console.log(res);
              me.districts = res.data.data;
            })
            .catch((err) => {
              console.log(err);
            });
        }

        // load dependency wards by district
        else if (dropTypes == "dropdown-districts") {
          let urlWard = `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id`;
          axios
            .post(
              urlWard,
              {
                district_id: Number(keyId),
              },
              {
                headers: {
                  token: `6b66cfca-af76-11ec-9bff-1e4c555e56e3`,
                },
              }
            )
            .then((res) => {
              console.log(res);
              me.wards = res.data.data;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log(3);
        }

        let dropdown = e.target.parentElement.parentElement.parentElement;
        dropdown.classList.remove("dropdown-list-display");
      },

      setReceivingAddress(e) {
        let str1 = e.target.value;
        let address = this.$el.querySelectorAll(".form-dropdown");
        let province = address[0].value;
        console.log(province);
        let result = `${str1}, ${address[1].value}, ${address[2].value}, ${address[0].value}`;
        this.order.receivingAddress = result;
      },

      formatPrice(price) {
        return price.toLocaleString("vi", { style: "currency", currency: "VND" });
      },

      loadData() {
        let urlProvince = `https://online-gateway.ghn.vn/shiip/public-api/master-data/province`;
        axios
          .get(urlProvince, {
            headers: {
              token: `6b66cfca-af76-11ec-9bff-1e4c555e56e3`,
            },
          })
          .then((res) => {
            console.log(res);
            this.provinces = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    created() {
      console.log("create order");
      let me = this;
      if (!me.$cookies.get("_userId")) {
        me.$router.go(-1);
      }

      window.scrollTo(0, 0);
      me.loadData();
    },
    mounted() {
      let me = this;
      console.log("mouted cart view");

      if (me.$cookies.get("_userId")) {
        me.handleGetCartByUserId({
          userId: me.$cookies.get("_userId"),
          order: true,
        });
      }
    },
    updated() {
      console.log("updated order");
    },
  };
</script>

<style scoped>
@import url("../assets/css/page/cart.view.css");
@import url("../assets/css/page/order.view.css");
@import url("../assets/css/base/form.css");
.row-banking {
  margin-top: 40px;
  font-size: 1.3rem;
}
</style>