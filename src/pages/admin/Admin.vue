<template>
<div>
  <div class="container">
    <div class="menu-step-item">
      <div class="button-item button-item-size"><router-link to="/admin/product">Produkty</router-link></div>
      <div class="button-item button-item-size"><router-link to="/admin/offer">Oferty</router-link></div>
      <div class="button-item button-item-size">Receptura</div>
      <div class="button-item button-item-size">Inne</div>
    </div>
    <div class="menu-pion-item">
      <div class="button-item button-item-size">O nas</div>
      <div class="button-item button-item-size">Kontakt</div>
      <div class="button-item button-item-size">Orders</div>
      <div class="button-item button-item-size">Ustawienia</div>
    </div>
    <div class="content-item">
      <router-view></router-view>
    </div>
  </div>
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

@import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);

body {
  background-color: rgb(27, 173, 125)
}

a {
    text-decoration: none;
    color: #41403E;
}

.menu-step-item {
  border: 1px solid black;
  grid-area: menu-step;
  display: flex;
  padding: 5px;
}

.menu-pion-item{
  border: 1px solid black;
  grid-area: menu-pion;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.content-item { 
  border: 1px solid black;
  grid-area: content;
}

.button-item {
  background:transparent;
  padding:1rem 1rem;
  margin:0 1rem;
  transition:all .5s ease;
  color:#41403E;
  letter-spacing:1px;
  outline:none;
  align-self:center;
  border:solid 7px #41403E;
  font-family: 'Patrick Hand SC', cursive;
  text-decoration: none;

  &.button-item-size {
    font-size:2rem;  
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    border-radius: 155px 15px 125px 15px/15px 125px 15px 155px;
  }
  &:hover{
    box-shadow:2px 8px 4px -6px hsla(0,0%,0%,.3);
  } 
}

.container {
  margin: 0;
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "menu-step menu-step menu-step menu-step menu-step"  "menu-pion content content content content";
  column-gap: 10px;
  row-gap: 15px;
}

@media screen and (max-width: 700px) {
  .menu-pion-item {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .menu-step-item {
    flex-wrap: wrap;
  }

  .content-item {
    
  }

  .button-item.button-item-size {  
    font-size:1rem;
    box-shadow: 20px 38px 34px -26px hsla(0,0%,0%,.2);
    border-radius: 155px 15px 125px 15px/15px 125px 15px 155px;

  }

  .container {
    margin: 0;
    border: 1px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
    "menu-step menu-step menu-pion menu-pion" 
    "content content content content"
  }
}

@media screen and (max-width: 300px) {

  .menu-pion-item {
   
  }

  .menu-step-item {
    
  }

  .content-item {
    
  }
}

</style>