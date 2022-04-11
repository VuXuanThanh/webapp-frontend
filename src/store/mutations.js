export default  {
    changUserName(state, newUserName) {
        console.log(state);
        state.userName = newUserName
        console.log(state.userName)
    },
    changeAge(state, newAge) {
        state.age = newAge;
        console.log(state.age);
    },
    getPost(state, newPost) {
        state.posts =newPost;
        console.log('muate', newPost);      
    },

    // mutate category
    getCategories(state, categories){
        state.categories = categories;
    },

    // product
    getProductsByCategory(state, products){
        state.products = products;
    },

    // product image
    getImageByProduct(state, images){
        // console.log('mutate tai nah', images);
        state.productsImages = images;
    }
    
}