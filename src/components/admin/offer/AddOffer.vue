<template>
    <div class="add-offer">
        <span>Nazwa:</span>
        <input v-model="offer.name" placeholder="podaj nazwe">

        <span>Opis:</span>
        <textarea v-model="offer.description" placeholder="opis ..."></textarea>

        <span>Aktywowac:</span>
        <input type="checkbox" id="checkbox" v-model="offer.active">
        <label for="checkbox">{{ offer.active }}</label>

        <button @click="createOffer()">Dodaj oferte</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddOffer',
  components: {
   
  },

  data(){
    return {
      offerAdded: null,
      offer: {
          name: '',
          description: '',
          active: false
      }
    }
  },

  methods: {

    ...mapActions([
          'addOffer'
    ]),

    createOffer(){
      this.addOffer(this.offer);

    }

  },

  async mounted() {
      
  }
  
}
</script>
<style lang="scss" scoped>
  .add-offer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>