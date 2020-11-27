<template>
  <transition>
    <div v-if="show" class="modal"><slot /></div>
  </transition>
</template>

<script>
  import { ref } from 'vue';
  export default {
    props: {
      show: Boolean,
    },
    setup() {},
  };
</script>
