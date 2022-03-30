<template>
  <div class="row no-gutters">
    <div class="col l-12 slider slider__banner">
      <i class="fa fa-angle-left slider-prev"></i>
      <!-- <ul class="slider-dots">
        <li class="slider-dot-item active" data-index="0"></li>
        <li class="slider-dot-item" data-index="1"></li>
        <li class="slider-dot-item" data-index="2"></li>
        <li class="slider-dot-item" data-index="3"></li>
        <li class="slider-dot-item" data-index="4"></li>
      </ul>-->
      <div class="slider-wrapper">
        <div class="slider-main" v-bind:style="{transform: `translateX(${positionX}px)`}">
          <div class="slider-item">
            <img src="../../assets/img/slider/banner1.jpg" alt />
          </div>

          <div class="slider-item">
            <img src="../../assets/img/slider/banner2.jpg" alt />
          </div>

          <div class="slider-item">
            <img src="../../assets/img/slider/banner3.jpg" alt />
          </div>

           <div class="slider-item">
            <img src="../../assets/img/slider/banner4.jpg" alt />
          </div>

        </div>
      </div>
      <i class="fa fa-angle-right slider-next"></i>
    </div>
  </div>
</template>

<script>
  // import css from '../../assets'
  export default {
    name: "TheBanner",
    data() {
      return {
        positionX: 0,
      };
    },
    methods: {
      /** change image slider */
      changeSlide() {
        let me = this;

        let sliderWapper = me.$el.querySelector(".slider-wrapper");
        let sliderMain = sliderWapper.querySelector(".slider-main");
        let sliderItems = sliderMain.querySelectorAll(".slider-item");

        // let prevBtn = me.$el.querySelector('.slider-prev');
        // let nextBtn = me.$el.querySelector('.slider-next');

        let sliderItemWidth = sliderItems[0].offsetWidth;
        let sliderLength = sliderItems.length;

        let limPositionX = -sliderItemWidth * (sliderLength - 1);
        me.positionX =
          me.positionX > limPositionX ? me.positionX - sliderItemWidth : 0;
      },
    },
    mounted() {
      let me = this;
      console.log("mounted");
      setInterval(() => {
        me.changeSlide();
      }, 4000);
    },
  };
</script>

<style scoped>
@import url("../../assets/css/base/slider.css");

</style>