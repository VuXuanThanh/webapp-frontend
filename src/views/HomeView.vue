<template>
  <div class="grid wide home-views">
    <!-- banner -->
    <TheBanner />

    <!-- first intro -->
    <div class="row no-gutters row__introduction">
      <div class="col l-12 introduction">
        <h3 class="introduction__heading">Chào mừng đến với Lyoko!</h3>
        <p
          class="introduction__paragraph"
        >Đặt hàng, thanh toán, trải nghiệm và nhiều hơn nữa trên Lyoko</p>
        <p class="introduction__paragraph">
          <a class="introduction__link" href="#">Đăng nhập</a>
          hoặc
          <a href="#" class="introduction__link">Đăng kí</a>
          để trải nghiệm !
        </p>
      </div>
    </div>

    <!-- category -->
    <TheSliderCategory />

    <!-- preferential -->
    <div class="row no-gutters preferential">
      <div class="grid wide preferential__grid">
        <div class="row no-gutters preferential__row">
          <div class="col l-12 preferential__col">
            <h3 class="preferential__heading">Ưu đãi khuyến mãi</h3>
            <p class="preferential__paragraph">Chỉ có tại Lyoko, hấp dẫn và hữu hạn, đặt hàng ngay!</p>
          </div>
        </div>

        <div class="row no-gutters preferential__row">
          <div class="col l-4">
            <img src="https://cf.shopee.vn/file/c62e014fe484f2f8f12d3a39e87f7e9a" alt />
          </div>
           <div class="col l-4">
            <img src="https://cf.shopee.vn/file/c62e014fe484f2f8f12d3a39e87f7e9a" alt />
          </div>
           <div class="col l-4">
            <img src="https://cf.shopee.vn/file/c62e014fe484f2f8f12d3a39e87f7e9a" alt />
          </div>
        </div>
      </div>
      <!-- <div class="col l-4">
        <img src="https://cf.shopee.vn/file/c62e014fe484f2f8f12d3a39e87f7e9a" alt="">
      </div>-->
    </div>

    <!-- popular product -->
    <TheSliderProduct/>

    <!-- recommend product -->

    <!-- usage -->

    <!-- additional information -->
    <div class="row no-gutters information">
      <div class="grid wide information__grid">
        <div class="row no-gutters information__row">

          <div class="col l-6">
            <div class="information__column">

              <div class="information__logo">
                <div class="information__logo-img"></div>
                <h2 class="information__logo-name">Lyoko</h2>
              </div>

              <div class="information__content">Bán hàng gia dụng hàng đầu Việt Nam</div>

              <div class="information__details">
                <p>Lyoko hiện là một trong các nền tảng bán đồ gia dụng trực tuyến hàng đầu Việt Nam. Mua hàng tại website của chúng tôi, bạn sẽ sở hữu những sản phẩm gia dụng tốt, bền, chất lượng cao và giá cả hợp lí. Với Lyoko, việc đặt và mua hàng trực tuyến trở nên nhanh chóng, thuận tiện và dễ dàng.</p>
              </div>

              <div class="information__mobile">
                <div class="information__mobile-qr"></div>
                <div class="information__mobile-flatform">
                  <div class="information__mobile-appstore"></div>
                  <div class="information__mobile-googleplay"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col l-6">
            <div class="information__img">
              <img src="https://www.luxstay.com/home/home-02.png" alt="">
            </div>
          </div>

        </div>
      </div>
    </div>

  

  </div>
</template>

<script>
  // @ is an alias to /src
  import TheBanner from "../components/layout/TheBanner.vue";
  import TheSliderCategory from "../components/layout/TheSliderCategory.vue";
  import TheSliderProduct from '../components/layout/TheSliderProduct.vue'
  export default {
    name: "HomeView",
    components: {
      TheBanner,
      TheSliderCategory,
      TheSliderProduct,
    },
    data() {
      return {};
    },
    mounted() {},
    methods: {},
  };
</script>
<style>
@import url("../assets/css/page/home.view.css");
</style>