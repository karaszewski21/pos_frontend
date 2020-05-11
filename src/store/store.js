import Vue from 'vue'
import Vuex from 'vuex'
import ProductClient from '../clients/admin/product/ProductClient'

Vue.use(Vuex);

const productClient = new ProductClient();

const store = new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        activeProducts: state => {
            return state.products;
          }
    },
    mutations: {
        setProduct(state, product) {
            state.products.push(product)
        },
        setProducts(state, products) {
            state.products = products
        },
    },
    actions: {
        async fetchProducts({ commit }){
            commit('setProducts', await productClient.getProducts())

        },
        async addProduct({ commit }, product) {
            product = await productClient.createProduct(product);
            commit('setProduct', product.data);

        }
    },  
})

export default store