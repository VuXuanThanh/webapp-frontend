import cookie from 'vue-cookies'

export default {
    age: 10,
    posts: [],

    // categies
    categories: [],

    categoryId: '',

    products: [],

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
        priceDeal: 0

    },

    productsImages: [],


    userId: '',
    userName: cookie.get('_user'),

    isLoggedIn: false,

    userMsg: '',
    devMsg: '',
    isError: false

}