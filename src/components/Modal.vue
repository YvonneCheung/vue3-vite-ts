<template>
  <h2 class="wrapper"
    >距离下次回来还有<span class="hour">{{ hour }}</span
    >小时<span class="minute">{{ minute }}</span
    >分钟<span class="second">{{ second }}</span
    >秒</h2
  >
</template>
<script lang="ts">
  import { reactive, toRefs, computed, watchEffect, onMounted } from 'vue';
  export default {
    setup() {
      const state: any = reactive({
        hour: 0,
        minute: 0,
        second: 0,
      });
      onMounted(() => {
        computedTime();
      });
      function computedTime() {
        const currentTime = Date.now();
        const time = new Date('2020-12-26 22:00');
        const diffTime = time.getTime() - currentTime;
        state.hour = parseInt(diffTime / 1000 / 3600);
        state.minute = parseInt((diffTime / 1000 / 3600 - state.hour) * 60);
        state.second = parseInt(((diffTime / 1000 / 3600 - state.hour) * 60 - state.minute) * 60);
        setTimeout(() => {
          computedTime();
        }, 1000);
      }
      return { ...toRefs(state) };
    },
  };
</script>
<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
  }
  .hour {
    font-size: 40px;
    color: #569874;
  }
  .minute {
    font-size: 44px;
    color: #e4a547;
  }
  .second {
    font-size: 48px;
    color: rgb(241, 183, 192);
  }
</style>
