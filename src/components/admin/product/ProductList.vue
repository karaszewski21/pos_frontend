<template>
<div class="product-list">

      <div class="md-list" v-for="product in this.getProducts" :key="product.id">
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{ product.name }}</span>
          <span>{{ product.description }}</span>
          <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>
      </div>

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
<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>