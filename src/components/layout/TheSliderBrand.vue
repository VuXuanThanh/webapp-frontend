<template>
  <div class="row no-gutters slider__brand">
    <div class="col l-12">
      <h3 class="slider__category-heading">Thương hiệu nổi bật</h3>
      <!-- <p class="slider__category-paragraph">Các thương hiệu nổi tiếng ở Lyoko</p> -->
    </div>
    <div class="col l-12 slider">
      <i class="fa fa-angle-left slider-prev" @click="clickPrevBtn"></i>
      <div class="slider-wrapper">
        <div class="slider-main" v-bind:style="{transform: `translateX(${positionX}px)`}">
          <div class="slider-item">
            <img
              src="https://cf.shopee.vn/file/be109deb2f6ceb41811396c7dfc3f0d7"
              alt
            />
           
          </div>

          <div class="slider-item">
            <img
              src="https://cf.shopee.vn/file/963de83bcc0e4a815ec32ecfd4bdb414"
              alt
            />
           
          </div>

          <div class="slider-item">
            <img
              src="https://cf.shopee.vn/file/caabce00b9e7a5ed0c0e2a9fd810a756"
              alt
            />
           
          </div>

          <div class="slider-item">
            <img
              src="https://cf.shopee.vn/file/963de83bcc0e4a815ec32ecfd4bdb414"
              alt
            />
           
          </div>

          <div class="slider-item">
            <img
              src="https://cf.shopee.vn/file/963de83bcc0e4a815ec32ecfd4bdb414"
              alt
            />
           
          </div>
        </div>
      </div>
      <i class="fa fa-angle-right slider-next" @click="clickNextBtn"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderBrand',
   methods: {
      clickPrevBtn() {
        console.log("click prev btn");
        this.handleChangeSlide(-1);
      },
      clickNextBtn() {
        console.log("click next btn");
        this.handleChangeSlide(1);
      },
      handleChangeSlide(direction) {
        let me = this;

        let sliderWapper = me.$el.querySelector(".slider-wrapper");
        let sliderMain = sliderWapper.querySelector(".slider-main");
        let sliderItems = sliderMain.querySelectorAll(".slider-item");

        // let prevBtn = me.$el.querySelector('.slider-prev');
        // let nextBtn = me.$el.querySelector('.slider-next');

        let sliderItemWidth = sliderItems[0].offsetWidth;
        let sliderLength = sliderItems.length;

        if (direction === 1) {
          let limPositionX = -sliderItemWidth * (sliderLength - 4);
          me.positionX =
            me.positionX > limPositionX
              ? me.positionX - sliderItemWidth
              : limPositionX;
        } else {
          me.positionX = me.positionX < 0 ? me.positionX + sliderItemWidth : 0;
        }

        // console.log(prevBtn, nextBtn);
      },
    },
    data() {
      return {
        positionX: 0,
      };
    },

}
</script>

<style scoped>
@import url("../../assets/css/base/slider.css");

.slider__brand {
    margin-top: 25px;
}
.slider-wrapper {
   
    
}
.slider-item {
  height: 100%;
  width: 400px;
  flex: 1 0 400px;
  user-select: none;
  padding: 0 10px;
  position: relative;
   border: 1px solid #e5e5e5;
}
.slider-item img {
  border-radius: 10px;
  z-index: 50;
}
.slider__category {
  font-size: 1.6rem;
  margin-top: 22px;
}
.slider__category-heading {
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
}
.slider__category-paragraph {
    font-size: 1.6rem;
}

</style>