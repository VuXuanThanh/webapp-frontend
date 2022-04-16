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
    },

    

    registration(){
        console.log('cap nhat len state')
    },

    login(state, response){
        console.log('cap nhat len statem login');
        console.log(response);
        if(response.status==200){
            state.userId = response.data.data.userId;
            state.userName = response.data.data.userName;
            state.isLoggedIn = true;
            state.isError = false;
        }
        else {
            state.userId='';
            state.userMsg = response.data.userMsg;
            state.devMsg = response.data.devMsg;
            state.isError = true;
        }
    },

    statusLogin(state, status){
        state.isLoggedIn = status;
    },

    logout(state, response){
        if(response.status==200){
            state.userId = ''
            state.userName =''
            state.isLoggedIn = false;
        }
        else {
            state.userMsg = response.data.userMsg;
            state.devMsg = response.data.devMsg;
            state.isError = true;
        }
    }


    
}