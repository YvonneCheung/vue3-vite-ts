<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
    setup() {
      const a = () => {
        console.log('2321312');
      };
      return { a };
    },
  };
</script>
