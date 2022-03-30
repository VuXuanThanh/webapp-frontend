<template>
  <div class="row no-gutters slider__category">
    <div class="col l-12">
      <h3 class="slider__category-heading">Danh mục</h3>
      <p class="slider__category-paragraph">Khám phá các danh mục sản phẩm ở Lyoko</p>
    </div>
    <div class="col l-12 slider">
      <i class="fa fa-angle-left slider-prev" @click="clickPrevBtn"></i>
      <div class="slider-wrapper">
        <div class="slider-main" v-bind:style="{transform: `translateX(${positionX}px)`}">
          <div class="slider-item">
            <img
              src="https://beptuhanoi.com/wp-content/uploads/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png"
              alt
            />
            <p class="slider__category-name">Bếp điện</p>
          </div>

          <div class="slider-item">
            <img
              src="https://beptuhanoi.com/wp-content/uploads/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png"
              alt
            />
            <p class="slider__category-name">Bếp điện</p>
          </div>

          <div class="slider-item">
            <img
              src="https://beptuhanoi.com/wp-content/uploads/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png"
              alt
            />
            <p class="slider__category-name">Bếp điện</p>
          </div>

          <div class="slider-item">
            <img
              src="https://beptuhanoi.com/wp-content/uploads/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png"
              alt
            />
            <p class="slider__category-name">Bếp điện</p>
          </div>

          <div class="slider-item">
            <img
              src="https://beptuhanoi.com/wp-content/uploads/BEP-TU-BAUER-BE-328SI-4-e1638610288956.png"
              alt
            />
            <p class="slider__category-name">Bếp điện</p>
          </div>
        </div>
      </div>
      <i class="fa fa-angle-right slider-next" @click="clickNextBtn"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TheSliderCategory",
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
  };
</script>

<style scoped>
@import url("../../assets/css/base/slider.css");

.slider-item {
  height: 100%;
  width: 300px;
  flex: 1 0 300px;
  user-select: none;
  padding: 0 10px;
  position: relative;
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
  font-size: 2.8rem;
  font-weight: 600;
}
.slider__category-paragraph {
}
.slider__category-name {
  position: absolute;
  z-index: 100;
  top: 60%;
  left: 20%;
  color: #fff;
  font-weight: 700;
  font-size: 2.8rem;
}
</style>