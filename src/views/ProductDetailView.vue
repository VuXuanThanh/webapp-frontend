<template>
  <div class="grid wide product-detail-view">
    <div class="row row-breadcrumbs">
      <div class="col l-12">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <a href class="breadcrumbs__item-link">Trang chủ</a>
          </li>/
          <li class="breadcrumbs__item">
            <a href class="breadcrumbs__item-link">Sản phẩm</a>
          </li>/
          <li class="breadcrumbs__item">
            <a href class="breadcrumbs__item-link">{{Product.productName}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="row row-product-detail">
      <div class="col l-5 slider slider__banner slider__product">
        <i class="fa fa-angle-left slider-prev"></i>

        <div class="slider-wrapper">
          <div class="slider-main" v-bind:style="{transform: `translateX(${positionX}px)`}">
            <div class="slider-item">
              <img src="../assets/img/category/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png" alt />
            </div>

            <div class="slider-item">
              <img src="../assets/img/category/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png" alt />
            </div>

            <div class="slider-item">
              <img src="../assets/img/category/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png" alt />
            </div>

            <div class="slider-item">
              <img src="../assets/img/category/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png" alt />
            </div>
          </div>
        </div>
        <i class="fa fa-angle-right slider-next"></i>
      </div>

      <div class="col l-7 product-detail">
        <div class="product-detail-information">
          <span class="product-name">{{Product.productName}}</span>
          <div class="product-additional">
            <span class="product-code">EHG8251BC</span>
            <div class="home-product-item__rating product-rating">
              <i class="home-product-item__rating-star-gold fas fa-star product-rating-star"></i>
              <i class="home-product-item__rating-star-gold fas fa-star product-rating-star"></i>
              <i class="home-product-item__rating-star-gold fas fa-star product-rating-star"></i>
              <i class="home-product-item__rating-star-gold fas fa-star product-rating-star"></i>
              <i class="fas fa-star product-rating-star"></i>
            </div>

            <span class="products-sold">
              <span class="products-sold-number">2000</span>
              <span class="product-sold-text">đã bán</span>
            </span>

            <span class="products-status">{{getStatusProduct}}</span>
          </div>

          <div class="product-price">
            <span class="product-price-orgin">{{formatPrice(Product.priceOrgin)}}</span>
            <span class="product-price-sell">{{formatPrice(Product.priceDeal)}}</span>
            <span class="product-price-discount">
              <span class="product-discount-number">{{getDiscountPercent}}%</span>
              <span class="product-discount-text">giảm</span>
            </span>
          </div>

          <ul class="product-inclusion">
            <li class="product-inclusion-item">Công nghệ StepFlame với 9 mức nhiệt.</li>
            <li class="product-inclusion-item">Kiềng gang chắn gió tăng hiệu suất nấu.</li>
            <li class="product-inclusion-item">Mâm chia lửa lớn phù hợp cho các món chiên xào.</li>
          </ul>

          <div class="product-button">
            <button class="product-cart-button">
              <i class="fa-solid fa-cart-shopping product-cart-icon"></i>
              <span class="product-cart-text">Thêm hàng vào giỏ</span>
            </button>

            <button class="product-order-button">
              <span class="product-order-text">Đặt hàng</span>
            </button>
          </div>

          <ul class="product-service">
            <li class="product-service-item">
              <i class="fa-solid fa-money-bill"></i>
              Thanh toán khi nhận hàng
            </li>
            <li class="product-service-item">
              <i class="fa-solid fa-gear"></i>
              Miễn phí lắp đặt
            </li>
            <li class="product-service-item">
              <i class="fa-solid fa-wrench"></i>
              Bảo hành 15 tháng
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row row-product-description">
      <div class="col l-12">
        <span class="product-description-title">chi tiết sản phẩm</span>
      </div>
      <div class="col l-12">
        <div class="product-description-detail">
          <div class="product-description-item">
            <span class="product-description-key">Danh mục:</span>
            <span class="product-description-value">
              <router-link to="product">{{Product.productName}}</router-link>
            </span>
          </div>

          <div class="product-description-item">
            <span class="product-description-key">Thương hiệu:</span>
            <span class="product-description-value">Sun House</span>
          </div>

          <div class="product-description-item">
            <span class="product-description-key">Chất liệu:</span>
            <span class="product-description-value">{{Product.material}}</span>
          </div>

          <div class="product-description-item">
            <span class="product-description-key">Phụ kiện:</span>
            <span class="product-description-value">{{Product.accessory}}</span>
          </div>

          <div class="product-description-item">
            <span class="product-description-key">Trọng lượng:</span>
            <span class="product-description-value">{{Product.weights}}gram</span>
          </div>

          <div class="product-description-item">
            <span class="product-description-key">Kích thước:</span>
            <span class="product-description-value">{{Product.dimension}}</span>
          </div>

          <div class="product-description-item">
            <span class="product-description-key">Công suất:</span>
            <span class="product-description-value">{{Product.powers}}</span>
          </div>

          <div class="product-description-item">
            <span class="product-description-key">Xuất xứ:</span>
            <span class="product-description-value">{{Product.orgin}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row row-product-description">
      <div class="col l-12">
        <span class="product-description-title">mô tả sản phẩm</span>
        <p class="product-description-detail">
          "- Nồi lẩu điện mini đa năng có tay cầm được nhập khẩu với chất lượng cao cấp an toàn tuyệt đối cho sức khỏe người sử dụng. Với công nghệ đa năng cùng những tính năng thông minh, tiện ích bắt kịp xu thế thời buổi hiện đại, nồi điện đa dụng cao cấp chắc chắn có được sự hài lòng từ những khách hàng khó tính.
          Đặc điểm nổi bật của nồi nấu lẩu mini:
          - Công suất mạnh: Nấu ăn nhanh chóng rất tiện lợi cho việc đun nấu
          - Chế độ kiểm soát nhiệt độ thông minh: Nếu nhiệt độ quá cao hoặc mực nước trong nồi quá ít thì sẽ kích hoạt chế độ tự động tắt nguồn, tránh được rủi ro ngoài ý muốn cũng như đảm bảo được tuổi thọ của nồi.
          - Thiết kế an toàn, chất liệu cao cấp: Chịu được nhiệt độ cao, khung bằng thép inox không gỉ, vỏ cách nhiệt 3 lớp chống bỏng.
          - Đáy nồi bền bỉ: Được thiết kế bằng chất liệu cao cấp hấp thụ nhiệt nhanh chóng.
          - Lòng nồi vân đá chống dính
          - Ca nấu mì giúp bạn nhanh chóng có được những món ăn ưa thích như: mỳ phở ăn liền, lẩu, các món kho và luộc, nấu cháo, hâm nóng thức ăn, đun nước…
          - Giúp bạn có thể tăng giảm nhiệt độ theo mong muốn khi đun nấu.
          - Tay cầm chống nóng, chống cháy, phủ sơn tĩnh điện, bề mặt sáng bóng, vệ sinh dễ dàng, nắp kính cường lực chịu nhiệt cao.
          - Nồi nấu mini đa năng siêu tốc giúp thực hiện công việc nấu nướng một cách nhanh chóng &amp; hiệu quả, tiết kiệm thời gian đến mức tối đa.
          - Chất liệu inox giúp bề mặt luôn sáng đẹp, chống bám cặn, dễ dàng vệ sinh.
          - Đường kính nồi: 18cm
          ✔️ Home Life Store:
          🤗 Chất lượng sản phẩm đến tay Khách hàng luôn luôn tốt nhất
          🤗 Hàng hóa được kiểm tra kỹ đến từng centimet
          🤗 Sản phẩm shop tự thiết kế, tự chụp ảnh, KH có thể pm xem ảnh
          🤗 Hỗ trợ sau mua. Nếu có vấn đề về sản phẩm, xin đừng ngại liên hê với HOMELIFE: 0989550417
          🛑🛑🛑 VUI LÒNG QUAY VIDEO QUÁ TRÌNH MỞ HÀNG ĐỂ SHOP CÓ THỂ HỖ TRỢ BẠN TỐT NHẤT KHI HÀNG HÓA CÓ VẤN ĐỀ VỀ VẬN CHUYỂN
          Việc này có thể gây 1 chút bất tiện cho Quý khách, tuy nhiên, việc quay clip lại sẽ giúp ích cho bạn rất nhiều khi hang hóa bị vỡ, bể trong quá trình vận chuyển.
          #noi #noilau #noilaumini #noilaudanang #giahap #dogiadung #nhabep #nauan #noilaukemgiahap #chatluong #antoan #canaumi #noilaukemgiahap"
        </p>
      </div>
    </div>


    <div class="recommend">
      San pham goi y
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    data() {
      return {
        positionX: 0,
      };
    },
     computed: {
      ...mapGetters(["Product"]),

      getStatusProduct(){
        let status = (this.Product.statusProduct) ? 'Còn hàng' : 'Hết hàng';
        return status;
      },

      getDiscountPercent(){
        return Math.round((1-this.Product.priceDeal/this.Product.priceOrgin)*100);
      }

      
    },
    
     methods: {
      ...mapActions(["handleGetProductById"]),
      ...mapMutations(["getProductById"]),

      formatPrice(price) {
        return price.toLocaleString('vi', {style : 'currency', currency : 'VND'});
      }
     },

     created() {
       console.log('created product detail', this.$route.params.productId);
       this.handleGetProductById(this.$route.params.productId);
     }

  };
</script>

<style scoped>
@import url("../assets/css/base/slider.css");
@import url("../assets/css/components/product.css");
@import url("../assets/css/page/product.detail.css");

.slider {
  height: 400px;
}
.slider-wrapper {
  height: 100%;
}
.slider-dots li {
  border-radius: 4px;
}
.slider-item img {
  border-radius: 8px;
}
</style>