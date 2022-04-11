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

        //    var category ='';
        // console.log('params', params.pageSize);
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
    }
}