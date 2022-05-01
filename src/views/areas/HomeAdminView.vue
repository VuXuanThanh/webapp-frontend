<template>
  <div class="admin-home grid wide">
    <div class="row no-gutters">
      <div class="col l-3">
        <div class="admin-order admin-order-total">
          <div class="admin-order-title">Tổng số hóa đơn</div>
          <div class="admin-order-content">{{TotalRecords}}</div>
          <i class="fa-solid fa-cart-shopping admin-order-icon"></i>
        </div>
      </div>
      <div class="col l-3">
        <div class="admin-order admin-order-completed">
          <div class="admin-order-title">Số hóa đơn đã hoàn thành</div>
          <div class="admin-order-content">{{SuccessOrders}}</div>
          <i class="fa-solid fa-cart-shopping admin-order-icon"></i>
        </div>
      </div>
      <div class="col l-3">
        <div class="admin-order admin-order-pending">
          <div class="admin-order-title">Số hóa đơn chờ thanh toán</div>
          <div class="admin-order-content">{{PendingOrders}}</div>
          <i class="fa-solid fa-cart-shopping admin-order-icon"></i>
        </div>
      </div>
      <div class="col l-3">
        <div class="admin-order admin-order-total-money">
          <div class="admin-order-title">Tổng thu hóa đơn đã hoàn thành</div>
          <div class="admin-order-content">{{formatPrice(TotalMoney)}}</div>
          <i class="fa-solid fa-cart-shopping admin-order-icon"></i>
        </div>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col l-12">
        <div class="admin-list-orders">
          <h1>Các đơn hàng hiện tại</h1>
          <div class="scrollbar" id="scrollbar">
            <table class="list">
              <thead class="list-header">
                <tr class="list-row">
                  <th class="list-heading"></th>
                  <th class="list-heading">Mã đơn hàng</th>
                  <th class="list-heading">Khách hàng</th>
                  <th class="list-heading">Ngày tạo</th>
                  <th class="list-heading">Trạng thái</th>
                  <th class="list-heading">Tổng tiền</th>
                  <th class="list-heading">Hình thức thanh toán</th>
                </tr>
              </thead>

              <tbody class="list-body">
                <tr class="list-row" v-for="item in Orders" :key="item.ordersId" :orderId="item.ordersId">
                  <td class="list-cell">
                    <div class="list-cell-check">
                      <i class="fa-solid fa-pen-to-square" @click="updateSucessOrder"></i>
                    </div>
                  </td>
                  <td class="list-cell">{{item.ordersId}}</td>
                  <td class="list-cell">{{item.usersId}}</td>
                  <td class="list-cell">{{item.createDate}}</td>
                  <td class="list-cell">{{formatStatusOrder(item.statusOrder)}}</td>
                  <td class="list-cell">{{formatPrice(item.total)}}</td>
                  <td class="list-cell">Thanh toán khi nhận hàng</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name: "admin-home",
    data() {
      return {
        order: {
          ordersId: '',
          statusOrder: 1,
          usersId: ''
        }  
      }
    },
    computed: {
      ...mapGetters([
        "Orders",
        "TotalRecords",
        "SuccessOrders",
        "PendingOrders",
        "TotalMoney"
        ]),
    },
    methods: {
      ...mapActions(["handleGetOrders", 'handleUpdateOrderById']),
      ...mapMutations(["getOrders"]),
      formatPrice(price) {
        return price.toLocaleString("vi", { style: "currency", currency: "VND" });
      },
      formatStatusOrder(status) {
        let result = "";
        switch (status) {
          case 0:
            result = "Chờ thanh toán";
            break;
          case 1:
            result = "Đã thanh toán";
            break;
          default:
            result = "Đã hủy";
        }
        return result;
      },

      updateSucessOrder(e) {
        let me = this;
        let orderId = e.target.parentElement.parentElement.parentElement.getAttribute("orderId");
        me.order.ordersId = orderId;
        me.order.usersId = me.$cookies.get("_userId");
        me.handleUpdateOrderById(me.order);

      }
    },
    created() {
      this.handleGetOrders();
    },
  };
</script>

<style scoped>
@import url('../../assets/areas/css/main.css');
@import url('../../assets/css/base/grid.css');
.admin-order {
  height: 120px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  margin: 0 10px;
  padding: 10px;
  position: relative;
  font-size: 15px;
}
.admin-order-title {
  position: absolute;
  top: 25%;
}
.admin-order-content {
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 30px;
  font-weight: 600;
}
.admin-order-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  font-size: 30px;
}
.admin-order-completed {
}
.admin-order-pending {
}
.admin-order-total {
}
.admin-order-total-money {
}

.admin-list-orders {
  margin-top: 5px;
  /* padding-top: 10px; */
}
.admin-list-orders i {
  font-size: 20px;
}
.orders-failure {
  color: red;
}
.orders-success {
  color: green;
}
.list-cell-check i:hover {
  color: var(--hover-color);
}
</style>