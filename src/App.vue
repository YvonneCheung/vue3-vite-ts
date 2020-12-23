<template>
  <router-view></router-view>
  <!-- <hello-world></hello-world> -->
  <modal></modal>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Modal from './components/Modal.vue';
export default {
  components: { HelloWorld, Modal },
  name: 'App',
  setup () { },
};
</script>
