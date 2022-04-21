import axios from 'axios'
export default {
    handleChangeUserName(context, newUserName) {
        console.log(newUserName);
        context.commit('changUserName', newUserName);
    },
    handleChangeAge(context, newAge) {
        context.commit('changeAge', newAge);
    },

    handleGetPosts(context, newPosts) {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                newPosts = res.data;
                context.commit('getPost', res.data);
            })
            .catch(err => {
                console.log(err);
            })
        console.log(newPosts);

    },

    // category
    handleGetCategories(context) {
        let category = [];
        axios.get('https://localhost:44321/api/v1/Categories')
            .then(res => {
                category = res.data;
                context.commit('getCategories', res.data);
            })
            .catch(err => {
                console.log(err);
            })
        return category;
    },

    // products by category
    handleGetProductsByCategory(context, params) {
        axios.get('https://localhost:44321/api/v1/Categories')
            .then(res => {
                console.log(res);
                let categoryId = (params.categoryId=='') ? res.data[0].categoryId : params.categoryId;
                let type = (params.type);
                const url = `https://localhost:44321/api/v1/Products/filter1?type=${type}&categoryId=${categoryId}&pageSize=${params.pageSize}&pageIndex=${params.pageIndex}`
                axios.get(url)
                    .then(res => {
                        console.log(res.data);
                        context.commit('getProductsByCategory', res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err);
            })


    },

    handleGetProductById(context, productId){
        axios.get(`https://localhost:44321/api/v1/Products/${productId}`)
            .then(res=> {
                console.log(res)
                context.commit('getProductById', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },

    // products images
    handleGetImageByProduct(context) {
        axios.get(`https://localhost:44321/api/v1/ProductImages`)
            .then(res => {
                // console.log('image', res.data);
                context.commit('getImageByProduct', res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },

    // registration
    handleRegistration(context){
        console.log(context);
        console.log('dang goi API dang ki')
    },

    // login
    handleLogin(context, authenticateRequest) {
       
        console.log('goi login');
        axios.post('https://localhost:44321/api/v1/Users/login', authenticateRequest, { withCredentials: true })
            .then(res=> {
                context.commit('login', res);
            })
            .catch(err=> {
                console.log(err.response);
                context.commit('login', err.response);
            })
    },

    handleStatusLogin(context, status){
        context.commit('statusLogin', status);
    },

    // handle logout
    handleLogout(context){
        console.log('goi logout', context);
        axios.get('https://localhost:44321/api/v1/Users/logout', { withCredentials: true })
            .then(res=> {
                console.log(res);
                context.commit('logout', res);
            })
            .catch(err=> {
                console.log(err.response);
                context.commit('logout', err.response);
            })
    },

    // get items in cart
    handleGetCartByUserId(context, param){
        let userId = param.userId;
        let order=param.order;
        axios.get(`https://localhost:44321/api/v1/CartItems/${userId}?order=${order}`, { withCredentials: true })
        .then(res=> {
            console.log(res.data);
            context.commit('getCartByUserId', res);
        })
        .catch(err=> {
            console.log(err);
        })
    },

    // handle add items to cart
    handleAddItemsToCart(context, item){
        axios.post('https://localhost:44321/api/v1/CartItems', item)
            .then(res=> {
                console.log(res);
                context.commit('addItemsToCart', res);
            })
            .catch(err => {
                console.log(err);
                context.commit('addItemsToCart', err.response);
            })
    },

    // auto show/hide dialog
    handleUpdateMessageCart(context, isShow){
        context.commit('updateMessageCart', isShow)
    },

    // get sum records in cartItem
    handleGetSumRecordsCart(context, userId ){
        axios.get(`https://localhost:44321/api/v1/CartItems/${userId}/records`)
        .then(res=> {
            console.log(res);
            context.commit('getSumRecordsCart', res);
        })
        .catch(err=> {
            console.log(err.response);
            // context.commit('logout', err.response);
        })
    },

    // clearSumRecords
    handleClearSumRecords(context){
        context.commit('clearSumRecords');
    },

    handleUpdateSumRecords(context){
        context.commit('updateSumRecords');
    }
}