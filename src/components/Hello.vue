
<template >
 <div id="helloapp">
   <h3>My Shop</h3>
    <ul class="list-unstyled">
      <div class="container">
      <div class="row">  
      <li v-for="(item, index) in member" :key="index" >
      <div class="col-md">
      <div class="card">
        <img :src="image" :alt="name" class="card-img-top"> 
        <div class="card-header h4">{{ item.name }}</div>
        <div class="card-body">
          <div class="card-text">{{ price | dollars }}</div>
        </div>
      </div>
      </div>
      </li>
      </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'helloapp',
    data() {
      return {
        member:[
        {invId:1,name:'Adam',image:'//placehold.it/200',price:999},
        {invId:2,name:'Jack',image:'//placehold.it/200',price:1499},
        {invId:3,name:'Candy',image:'//placehold.it/200',price:499},
        {invId:4,name:'Louis',image:'//placehold.it/200',price:299},
        {invId:4,name:'Louis',image:'//placehold.it/200',price:299}
        ]
      }
    }
};
</script>