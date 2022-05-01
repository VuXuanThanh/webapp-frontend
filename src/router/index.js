import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'customer-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerView.vue'),
    children: [
      {
        path: '',
        name: 'productsview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HomeView
      },
      {
        path: 'products',
        name: 'productsview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
      },

      {
        path: 'product/:productId',
        name: 'product',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetailView.vue')
      },

      {
        path: 'registration',
        name: 'registration',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationView.vue')
      },
      {
        path: 'login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue')
      },
      {
        path: 'order',
        name: 'order',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/OrderView.vue')
      },
      {
        path: 'order-response',
        name: 'order-response',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/OrderResponse.vue')
      },
     

    ]
  },
  
 
  {
    path: '/admin',
    name: 'administrator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/areas/AdministratorView.vue'),
    meta: {
      requiredAuthorization: true, // You can enable/disable authorization 
      roles: ['admin'] // This can be accessed by only admin
   },
    children: [

      {
        path: '',
        name: 'home-admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/areas/HomeAdminView.vue')
      },

      {
        path: 'product',
        name: 'home-admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/areas/ProductAdminView.vue')
      },

      {
        path: 'product',
        name: 'home-admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/areas/ProductAdminView.vue')
      },

      {
        path: 'category',
        name: 'category-admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/areas/CategoryAdminView.vue')
      },

      {
        path: 'brand',
        name: 'brand-admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/areas/BrandAdminView.vue')
      },

      {
        path: 'users',
        name: 'users-admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/areas/UsersAdminView.vue')
      },


     
    
      

    ]

    
  },

  {
    path: '/administrator/login',
    name: 'login-admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/*webpackChunkName: "about" */ '../views/areas/LoginAdminView.vue')
  },
  

 


]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router;
