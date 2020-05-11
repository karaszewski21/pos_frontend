<template>
 <div>
    Admin
    <router-link to="/admin/product">Go to product</router-link>
    <router-link to="/admin/offer">Go to offer</router-link>
    <router-view></router-view>
 </div>
</template>

<script>


export default {
  name: 'Admin',
  components: {
   
  }
}
</script>
<style lang="scss">
/* write SCSS here */
</style>