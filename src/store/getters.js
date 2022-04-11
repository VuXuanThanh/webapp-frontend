export default  {
    UserName: state=>  "UserName: "+state.userName,

    Age: state =>  state.age + "year old",

    Posts: state => state.posts,

    Categories: state => state.categories,

    CategoryId: state=> state.categoryId,

    Products: state=> state.products,

    ProductImages: state=> state.productsImages,
    
}