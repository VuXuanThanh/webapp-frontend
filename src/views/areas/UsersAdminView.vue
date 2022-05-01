<template>
  <div class="users-admin">
    <div class="content__functional">
      <div class="content__top">
        <p class="content__top-text">Danh sách người dùng</p>
        <button class="button content__top-button" @click="showFormUsers">
          Thêm người dùng
        </button>
      </div>

      <div class="content__bottom">
        <div class="content__bottom-left">
          <button class="button content__top-button">Phân quyền người dùng</button>
        </div>

        <div class="content__bottom-right">
        
          <div class="btn-refresh">
            <i class="btn-icon fas fa-sync-alt"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="content__main">
      <div class="scrollbar" id="scrollbar">
        <table class="list">
          <thead class="list-header">
            <tr class="list-row">
              <th class="list-heading"></th>
              <th class="list-heading">Mã người dùng</th>
              <th class="list-heading">Tên người dùng</th>
              <th class="list-heading">Email</th>
              <th class="list-heading">Vị trí</th>
              <th class="list-heading">Trạng thái</th>
            </tr>
          </thead>

          <tbody class="list-body">
            <tr class="list-row" v-for="users in Users" :key="users.usersId" :id="users.usersId">
              <td class="list-cell">
                <div class="list-cell-check">
                  <i class="fa-solid fa-user-slash"></i>
                </div>
              </td>
              <td class="list-cell">{{users.usersId}}</td>
              <td class="list-cell">{{users.userName}}</td>
              <td class="list-cell">{{users.email}}</td>
              <td class="list-cell">{{users.roleId}}</td>
              <td class="list-cell">{{users.isActive}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <FormUsers v-if="IsShowForm" :formMode="formMode" :categoryId="usersId"/>
  </div>
</template>

<script>
  import FormUsers from '../../components/areas/component/FormUsers.vue'
  import axios from "axios";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name: "users-admin",
    data() {
      return {
        page: 1,

        params: {
          type: 0,
          usersId: "",
          pageSize: 24,
          pageIndex: 1,
        },

        isShowForm: false,
        formMode: 1,
        usersId: "",
      };
    },

    components: {
      FormUsers
    },
    computed: {
      ...mapGetters([
        "Categories",
        "Users",
        "usersId",
        "usersImages",
        "IsShowForm",
      ]),
    },
    methods: {
      ...mapActions([
        "handleGetCategories",
        "handleGetuserssByusers",
        "handleGetImageByusers",
        "handleGetUsers",
        "handleToggleProductForm",
      ]),
      ...mapMutations(["getCategories", "getuserssByusers", "getImageByusers"]),

      showFormUsers() {
        this.handleToggleProductForm(true);
        // this.usersId = "NULL";
      },

      refreshListUsers() {
        this.handleGetCategories();
      },

      updateUsersById(e) {
        let usersId =
          e.target.parentElement.parentElement.parentElement.getAttribute("id");
        this.usersId = usersId;
        this.formMode = 2;
        this.handleToggleProductForm(true);
      },

      clickCheckboxRowUsers(e) {
        e.target.classList.toggle("cart-checkbox-selected");
        let id =
          e.target.parentElement.parentElement.parentElement.getAttribute("id");
        axios
          .delete(`https://localhost:44321/api/v1/Users/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            0;
            console.log(res);
            this.handleGetCategories();
          })
          .catch((err) => {
            console.log(err);
          });
      },

      /** Events click pagination item */
      clickPaginationItem() {
        let me = this;
        let items = me.$el.querySelectorAll(".v-pagination__item");
        items.forEach((item) => {
          item.onclick = (element) => {
            console.log("phan trang", element.target);
            let pageIndex = me.$el.querySelector(
              ".v-pagination__item--active"
            ).innerHTML;
            me.params.pageIndex = pageIndex;
            console.log(me.params);
            me.handleGetUsers(me.params);
          };
        });
      },
    },

    created() {
      this.handleGetUsers();
    },
    updated() {
      this.clickPaginationItem();
    },
  };
</script>

<style scoped>
@import url("../../assets/areas/css/main.css");

.users-admin {
  padding: 16px;
}
</style>
<style>
.list-cell-check-icon {
  cursor: pointer;
  font-size: 20px;
}
.users-img {
  width: 240px;
  height: 240px;
  background-size: center center;
  background-repeat: no-repeat;
}
.theme--light.v-pagination .v-pagination__item--active {
  color: #fff;
  background: #fd5f32 !important;
}
.v-pagination__item {
  font-size: 14px !important;
  font-weight: 600;
}
.v-pagination {
  margin-top: 20px !important;
  position: relative;
}
.v-pagination li {
  margin: 0 5px;
}

.cart-checkbox {
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 1px solid #333;
}
.cart-checkbox-selected {
  position: relative;
}
.cart-checkbox-selected::after {
  content: "";
  position: absolute;
  /* display: none; */
  border-right: 2px solid var(--default-color);
  border-bottom: 2px solid var(--default-color);
  transform: rotate(45deg);
  left: 5px;
  width: 6px;
  height: 12px;
  top: 0px;
  color: #333;
}
</style>