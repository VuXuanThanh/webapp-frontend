<template>
  <div class="modal" v-if="isShow">
    <div class="modal__overlay"></div>
    <div class="modal__body">
      <div class="modal__inner">
        <div class="modal-form">
          <span class="modal__title">thông tin sản phẩm</span>
          <div class="modal__main">
            <div class="modal__main-form">
              <div class="modal__main-avartar"></div>

              <div class="form-scrollbar" id="form-scrollbar">
                <form action id="form" class="form" method="post">
                  <h3 class="form-heading">A. Thông tin chung</h3>
                  <div class="form-bar"></div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label form-control-required">Tên sản phẩm</label>
                      <input
                        v-model="item.productName"
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
                      <label for="name" class="form-label form-control-required">Giá bán</label>
                      <input
                        v-model="item.priceDeal"
                        type="text"
                        class="form-control"
                        placeholder
                        name="Number"
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
                      <label for="name" class="form-label form-control-required">Giá gốc</label>
                      <input
                        v-model="item.priceOrgin"
                        type="text"
                        class="form-control"
                        placeholder
                        name="Number"
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
                      <label for="id" class="form-label">Chất liệu</label>
                      <input
                        v-model="item.material"
                        type="text"
                        class="form-control"
                        placeholder
                        required="required"
                      />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="name" class="form-label">Phụ kiện</label>
                      <input type="text" v-model="item.accessory" class="form-control" placeholder />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label">Khối lượng</label>
                      <input type="text" class="form-control" v-model="item.weights" placeholder />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="id" class="form-label">Kích thước</label>
                      <input
                        v-model="item.dimension"
                        type="text"
                        class="form-control"
                        placeholder
                        required="required"
                      />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label">Xuất xứ</label>
                      <input type="text" class="form-control" placeholder v-model="item.orgin" />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="id" class="form-label">Công xuất</label>
                      <input type="text" class="form-control" placeholder v-model="item.powers" />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label">Tóm tắt</label>
                      <input type="text" class="form-control" placeholder v-model="item.summary" />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="id" class="form-label">Mô tả</label>
                      <input
                        v-model="item.description"
                        type="text"
                        class="form-control"
                        placeholder
                      />
                      <div class="form-message">
                        <p>Vui long dien truong nay</p>
                        <div class="square__rotate"></div>
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="id" class="form-label">Danh mục</label>
                      <div class="combobox combobox__position">
                        <input
                          class="form-control combobox__input combobox__input-category"
                          value
                          id
                        />
                        <i class="fas fa-chevron-down combobox__icon" @click="showComboboxForm"></i>
                        <ul class="combobox__content">
                          <!-- <li class="combobox__content-item combobox__content-item-selected">
                            <i
                              class="combobox__item-icon combobox__item-icon-selected fas fa-check"
                            ></i>
                            <span class="combobox__item-value combobox__item-value-selected">
                              Tất
                              cả các vị
                              trí
                            </span>
                          </li>-->
                          <li
                            class="combobox__content-item"
                            @click="chooseItemCombobox"
                            v-for="item in Categories"
                            :key="item.categoryId"
                            :id="item.categoryId"
                          >
                            <span class="combobox__item-value">{{item.categoryName}}</span>
                          </li>
                        </ul>
                        <div class="form-message">
                          <p>Vui long dien truong nay</p>
                          <div class="square__rotate"></div>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="name" class="form-label">Thương hiệu</label>
                      <div class="combobox combobox__department">
                        <input class="form-control combobox__input combobox__input-brand" value id />
                        <i class="fas fa-chevron-down combobox__icon" @click="showComboboxForm"></i>
                        <ul class="combobox__content">
                          <!-- <li class="combobox__content-item combobox__content-item-selected">
                            <i
                              class="combobox__item-icon combobox__item-icon-selected fas fa-check"
                            ></i>
                            <span class="combobox__item-value combobox__item-value-selected">
                              Tất
                              cả phòng
                              ban
                            </span>
                          </li>-->
                          <li
                            class="combobox__content-item"
                            @click="chooseItemCombobox"
                            v-for="item in Brands"
                            :key="item.brandId"
                            :id="item.brandId"
                          >
                            <span class="combobox__item-value">{{item.brandName}}</span>
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
                <span class="button__text" @click="saveProduct">Lưu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="dialog">
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
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapActions, mapGetters } from "vuex";
  import { validation } from "../../../mixins/validation";
  export default {
    name: "FormProduct",
    mixins: [validation],

    props: {
      formMode: Number,
      productId: String,
    },
    data() {
      return {
        
        item: {
          productId: '',
          productName: "smdnsbdsnbd",
          summary: '',
          descriptions: '',
          priceOrgin: 0,
          statusProduct: true,
          material: '',
          accessory: '',
          weights: '',
          dimension: '',
          star: 5,
          powers: '',
          orgin: '',
          brandId: '',
          categoryId: '',
          priceDeal: 0,
          brandName: '',
          categoryName: '',
        },

        product2: {
          // accessory: "combo dao 5 cai"
          // brandId: "59d19422-6657-452e-a7db-e5d54223c257"
          // brandName: null
          // categoryId: "64a59a25-2488-54b0-f6b4-c8af08a50cbf"
          // categoryName: null
          // descriptions: ""
          // dimension: "80x80xN"
          // material: "kinh nhua"
          // orgin: "VN"
          // powers: "5000"
          // priceDeal: 4800000
          // priceOrgin: 5800000
          // productId: "11b0fc90-4f98-2c2f-1ca6-59a0c0702c31"
          // productName: "Tủ lạnh Inverter UltimateTaste 300 ngăn đá dưới có ngăn đông mềm 308 lít version 67"
          // star: 1
          // statusProduct: true
          // summary: "87EMKA7754UN5I3Z8Q1Q14NL0K083511KD77QQNUV04F04KY16AHY7SRK76V80Z04QCNNV"
          // weights: "2000"
        },
        isShow: true,
      };
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

      saveProduct() {
        let me = this;
        let isValid = me.validate();
        // console.log(this.product)

        if (isValid) {
           me.item.priceOrgin = parseInt(me.item.priceOrgin);
          me.item.priceDeal = parseInt(me.item.priceDeal);
          console.log(me.item.priceOrgin, typeof me.item.priceOrgin);
          me.item.categoryId = me.$el
            .querySelector(".combobox__input-category")
            .getAttribute("id");
          me.item.brandId = me.$el
            .querySelector(".combobox__input-brand")
            .getAttribute("id");
          if (me.formMode == 1) {
           console.log(me.item)
           
           axios.post( `https://localhost:44321/api/v1/Products`, me.item)
            .then(res=> {
              console.log(res);
            })
            .catch(err=> {
              console.log(err);
            })
            
          } else {
            console.log("ma san pham", me.productId);
            console.log(me.product2);
            axios
              .put(
                `https://localhost:44321/api/v1/Products`,
                me.item
              )
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
      this.handleGetBrands();
      this.handleGetCategories();
    },
    mounted() {
      let me = this;
      console.log("form product mounted");
       console.log(me.product);
      console.log("ma san pham", me.productId);
      if(me.productId!=null) {
        // get product by id
        axios.get(`https://localhost:44321/api/v1/Products/${me.productId}`)
            .then(res=> {
              console.log(res.data);
              for (const key in me.item) {
                me.item[key] = res.data[key];
              }

              console.log(me.item)
                
            })
            .catch(err => {
                console.log(err)
            })
      }
      
    },
  };
</script>

<style>
</style>