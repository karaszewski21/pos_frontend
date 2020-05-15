<template>
    <div class="add-recipe">
        <span>Nazwa:</span>
        <input v-model="recipe.name" placeholder="podaj nazwe">

       <md-autocomplete
      v-model="selectedOffer"
      :md-options="this.getNameOffers"
      md-layout="box"
      md-dense>
      <label>Employees</label>
    </md-autocomplete>

        <!-- <span>Aktywowac:</span>
        <input type="checkbox" id="checkbox" v-model="offer.active">
        <label for="checkbox">{{ offer.active }}</label>

        <button @click="createOffer()">Dodaj oferte</button> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AddRecipe',
  components: {
   
  },

  data(){
    return {
      selectedOffer: null,

      recipe: {
          name: '',
          description: '',
          offer: {
              id: 0
          },
          proportion: []
        },
      proportion_product: {
            productId: 0,
            amount_portion: 0,
      },
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ]
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

  computed: {

  ...mapGetters({
        getNameOffers: 'nameOffers'
    }),

  },

  async mounted() {
      
  }
  
}
</script>
<style lang="scss" scoped>
  .add-recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>