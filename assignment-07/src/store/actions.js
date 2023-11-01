export default {
    removeProductFromCart(context, prodId) {
        context.commit('removeProductFromCart', prodId);
    },
    addProductToCart(context, productData){
        context.commit('addProductToCart', productData);
    },
    login(context){
        context.commit('login');
    },
    logout(context){
        context.commit('logout');
    },
}