<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h4>{{ touchme }}</h4>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <button @click="showModal = !showModal">showModal</button>
  <!-- <modal :show="showModal">hello</modal> -->
</template>

<script lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import Modal from './components/Modal.vue';
  import { onBeforeMount, provide, getCurrentInstance, onMounted, ref } from 'vue';

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Modal,
    },

    setup() {
      const showModal = false;
      provide('Theme', 'dark');
      function sayHello(e: any) {
        console.log(e, 'hello');
      }
      const { ctx } = getCurrentInstance();
      onMounted(() => {});
      const touchme = ctx.name;

      return { sayHello, touchme, showModal };
    },
  };
</script>
