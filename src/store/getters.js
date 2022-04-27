export default  {
    // UserName: state=>  "UserName: "+state.userName,

    Orders: state=> state.orders,

    TotalRecords: state=> state.totalRecords,
     
    SuccessOrders: state=> state.successOrders,

    PendingOrders: state=> state.pendingOrders,

    TotalMoney: state=> state.totalMoney,

    Age: state =>  state.age + "year old",

    Posts: state => state.posts,

    Categories: state => state.categories,

    Brands: state=> state.brands,

    CategoryId: state=> state.categoryId,

    Products: state=> state.products,
    Products1: state=> state.products1,

    Product: state=> state.product,

    ProductImages: state=> state.productsImages,

    UserId: state=> state.userId,

    UserName: state=> state.userName,

    IsLoggedIn: state=> state.isLoggedIn,

    UserMsg:  state => state.userMsg,

    DevMsg: state => state.devMsg,

    IsError: state => state.isError,

    CartItems: state => state.cartItems,

    CartItem: state => state.cartItem,
    
    ResponseCart: state=> state.responseCart,

    MessageCart: state=> state.messageCart,

    SumRecordsCart: state=> state.sumRecordsCart,

    IsShowForm: state=> state.isShowForm

}