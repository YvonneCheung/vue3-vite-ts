<template>
  <router-view></router-view>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
  export default {
  components: { HelloWorld },
    name: 'App',
    setup() {},
  };
</script>
