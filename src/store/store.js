import Vue from 'vue'
import Vuex from 'vuex'
import ProductClient from '../clients/admin/product/ProductClient'
import OfferClient from '../clients/admin/offer/OfferClient'

Vue.use(Vuex);

const productClient = new ProductClient();
const offerClient = new OfferClient();

const store = new Vuex.Store({
    state: {
        products: [],
        offers: []
    },
    getters: {
        activeProducts: state => {
            return state.products;
        },
        activeOffers: state => {
            return state.offers;
        },
        nameOffers: state => {
            return state.offers;
        }
    },
    mutations: {
        setProduct(state, product) {
            state.products.push(product)
        },
        setProducts(state, products) {
            state.products = products
        },
        setOffer(state, offer) {
            state.offers.push(offer)
        },
        setOffers(state, offers) {
            state.offers = offers
        },
    },
    actions: {
        async fetchProducts({ commit }){
            commit('setProducts', await productClient.getProducts())

        },
        async addProduct({ commit }, product) {
            product = await productClient.createProduct(product);
            commit('setProduct', product.data);

        },
        async fetchOffers({ commit }){
            commit('setOffers', await offerClient.getOffers())

        },
        async addOffer({ commit }, offer) {
            offer = await offerClient.createOffer(offer);
            commit('setOffer', offer.data);

        }
    },  
})

export default store