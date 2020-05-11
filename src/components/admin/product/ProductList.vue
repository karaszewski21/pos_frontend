<template>
 <div>
    <p>Product list</p>
<ul>
  <li v-for="product in this.getProducts" :key="product.id">
    {{ product.name }}
  </li>
</ul>

 </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {

  name: 'ProductList',

  methods: {

    ...mapActions([
        'fetchProducts'
    ])

  },

  computed: {

    ...mapGetters({
        getProducts: 'activeProducts'
    })
    
  },

  async created(){
    this.fetchProducts();
    
  },

  async mounted() {
    this.fetchProducts();
    
  }
}
</script>