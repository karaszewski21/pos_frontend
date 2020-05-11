<template>
    <div>
        <span>Nazwa:</span>
        <input v-model="product.name" placeholder="podaj nazwe">

        <span>Opis:</span>
        <textarea v-model="product.description" placeholder="add multiple lines"></textarea>

        <span>ilosc:</span>
        <input v-model="product.amount" placeholder="podaj ilosc">

        <span>sztuk:</span>
        <input v-model="product.quantity" placeholder="podaj ilosc sztuk">

        <span>Aktywowac:</span>
        <input type="checkbox" id="checkbox" v-model="product.active">
        <label for="checkbox">{{ product.active }}</label>

        <button @click="createProduct()">Dodaj product</button>

        <span v-if="productAdded">Product dodany</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddProduct',
  components: {
   
  },

  data(){
    return {
      productAdded: null,
      product: {
          name: '',
          description: '',
          amount: 0,
          quantity: 0,
          active: false
      }
    }
  },

  methods: {

    ...mapActions([
          'addProduct'
    ]),

    createProduct(){
      this.addProduct(this.product);

    }

  },

  async mounted() {
      
  }
  
}
</script>