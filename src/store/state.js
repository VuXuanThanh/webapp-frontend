import cookie from 'vue-cookies'

export default {
    age: 10,
    posts: [],

    // order module
    orders: [],
    order: {},
    totalRecords: 0 ,
    successOrders: 0 ,
    pendingOrders: 0 ,
    totalMoney: 0,
    /** category module */
    categories: [],
    categoryId: '',

    // brand modules
    brands: [],
    brandId: '',

    /** product */
    products: [],
    products1: [],
    product: {
        productId: '',
        productName: "",
        summary: "",
        descriptions: "",
        priceOrgin: 0,
        statusProduct: true,
        material: "",
        accessory: "",
        weights: "",
        dimension: "",
        star: 1,
        powers: "",
        orgin: "",
        brandId: "",
        categoryId: "",
        priceDeal: 0,


    },
    productsImages: [],

    /** authentication */
    userId: '',
    userName: cookie.get('_user'),
    isLoggedIn: false,
    isError: false,

    /** response result */
    userMsg: '',
    devMsg: '',

    
    /** cart module */
    cartItems: [],
    cartItem: {
        usersId: '',
        productId: '',
        price : 0,
        quanlity: 0
    },
    responseCart: "",
    messageCart: false,
    sumRecordsCart: 0,

    // admin product
    isShowForm: false,

    // 


}