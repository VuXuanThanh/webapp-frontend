export default  {
    // UserName: state=>  "UserName: "+state.userName,

    Age: state =>  state.age + "year old",

    Posts: state => state.posts,

    Categories: state => state.categories,

    CategoryId: state=> state.categoryId,

    Products: state=> state.products,

    Product: state=> state.product,

    ProductImages: state=> state.productsImages,

    UserId: state=> state.userId,

    UserName: state=> state.userName,

    IsLoggedIn: state=> state.isLoggedIn,

    UserMsg:  state => state.userMsg,

    DevMsg: state => state.devMsg,

    IsError: state => state.isError,
    
}