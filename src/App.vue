<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark rounded-0">
     
     <div class="collapse navbar-collapse container-fluid">
     <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>

     <ul class="nav navbar-nav">
      <li class="active"><router-link to="/Home">HomeBB</router-link></li>
      <li><router-link to="/about">About</router-link></li> 
      <li><router-link to="/Shop">Shop</router-link></li>
    </ul>
    <ul class="nav navbar-nav float-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        
    </ul>
    <button class="btn btn-primary float-right"  data-toggle="modal" data-target="#shoppingCart">Cart</button>

     </div>
    </nav>

    <router-view/>
 
  </div>  
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

#app {
    
  margin-top: 60px;
}
#nav{
  border:0;
}
</style>
