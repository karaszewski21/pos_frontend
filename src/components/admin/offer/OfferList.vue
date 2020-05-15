<template>
<div class="product-list">

      <div class="md-list" v-for="offer in this.getOffers" :key="offer.id">
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{ offer.name }}</span>
          <p>{{ offer.description }}</p>
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

  name: 'OfferList',

  methods: {

    ...mapActions([
        'fetchOffers'
    ])

  },

  computed: {

    ...mapGetters({
        getOffers: 'activeOffers'
    })
    
  },

//   async created(){
//     this.fetchOffers();
    
//   },

  async mounted() {
    this.fetchOffers();
    
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