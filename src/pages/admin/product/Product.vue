<template>
<div class="product-container">
  <div class="product-menu">
    <md-toolbar class="md-accent" md-elevation="1">
    <h3 class="md-title" style="flex: 1">Title</h3>
    <md-button>Refresh</md-button>
    <md-button class="md-primary" @click="showDialog = true">Nowy produkt</md-button>
    </md-toolbar>
  </div>
  <product-list />
  <div class="modal-mask" v-if="showDialog">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            <md-dialog-actions>
              <md-button class="md-primary" @click="showDialog = false">Zamknij</md-button>
            </md-dialog-actions>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body">                     
            <add-product />
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
          
          </slot>
        </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import ProductList from '../../../components/admin/product/ProductList'
import AddProduct from '../../../components/admin/product/AddProduct'

export default {
  name: 'Product',
  components: {
    ProductList,
    AddProduct   
  },
  data: () => ({
      showDialog: false
  })
}
</script>
<style lang="scss" scoped>
  .product-container {
    margin: 0;
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "product-menu product-menu product-menu product-menu product-menu"  "product-list product-list product-list product-list product-list";
    column-gap: 10px;
    row-gap: 15px;
  }

  .product-menu {
    grid-area: product-menu;
  }

  .product-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-area: product-list;
  }

  .new-product-dialog {
    grid-area: new-product-dialog;
  }

  .modal-mask {
    display: table;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    vertical-align: middle;
  }

  .modal-container {
    width: 400px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>