<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Vue.js Home"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Hello.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>