import cookie from 'vue-cookies'

export default {
    age: 10,
    posts: [],

    // categies
    categories: [],

    categoryId: '',

    products: [],

    product: {},

    productsImages: [],


    userId: '',
    userName: cookie.get('_user'),

    isLoggedIn: false,

    userMsg: '',
    devMsg: '',
    isError: false

}