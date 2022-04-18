<template>
  <div class="dialog" v-if="status">
    <div class="dialog">
      <!-- <div class="dialog-overlay"></div> -->
      <div class="dialog-body">
        <div class="dialog-inner">
          <div class="dialog-content">
            <!-- <div class="dialog-close">×</div> -->
            <i class="fa-regular fa-circle-check dialog-icon"></i>
            <div class="dialog-message">{{message}}</div>
            <!-- <div class="dialog-operation">
              <button class="button dialog-button dialog-button-close">Hủy bỏ</button>
              <button
                class="button dialog-button dialog-button-confirm"

              >Đồng ý</button>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DialogMessage",
    props: {
      message: String,
      status: Boolean,
    },
    data() {
      return {
        isShow: true,
      };
    },
    created() {
        console.log("create dialog", this.message);
      setTimeout(() => (this.isShow = false), 3000);

    },

    mouted() {
      console.log("mouted dialog", this.message);
    },
    updated() {
      console.log("update dialog");
        setTimeout(() => (this.isShow = false), 3000);
    },
  };
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* display: none; */
  z-index: 9999;
}
.dialog-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  min-height: 500px;
}
.dialog-body {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 99999;
}
.dialog-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;

  min-width: 444px;
}

.dialog-content {
  position: relative;
  /* padding: 24px 16px; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
}
.dialog-icon {
  color: greenyellow;
  font-size: 4rem;
}

.dialog-close {
  position: absolute;
  right: 0;
  font-size: 27px;
  position: absolute;
  right: 16px;
  top: 0;
  cursor: pointer;
}
.dialog-message {
  /* padding-top: 16px;
    margin-bottom: 32px; */
  font-size: 2rem;
  display: flex;
  color: #fff;
  font-weight: 700;
  height: 150px;
  align-items: center;
  justify-content: center;
}
.dialog-operation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.dialog-button {
  margin: 0 8px;
}
.dialog-button-close {
  background-color: #fff;
  border: 1px solid #d3d7de;
}
.dialog-button-confirm {
  background: #ec4243;
  color: #fff;
}
</style>