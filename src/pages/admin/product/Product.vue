<template>
<div>
<product-list />
<add-product />

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
}
</script>