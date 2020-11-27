<template>
  <h1>{{ msg }}</h1>
  <button @click="sayHello">count is: {{ count }}</button>
  <h1>ref && reactive</h1>
  <h2> ref:{{ count }} </h2>
  <h2> reactive:{{ reactiveField }} </h2>
  <h2> reactive:{{ a[0].a }} </h2>
  <button @click="addRef"> addRef </button>
  <button @click="addReactive"> addReactive </button>
  <button @click="addA"> addA </button>
  <button @click="increment"> Count is: {{ reactiveField }}, double is: {{ double }} </button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
  import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onActivated,
    onDeactivated,
    onErrorCaptured,
    ref,
    inject,
    reactive,
    toRefs,
    watch,
    watchEffect,
    computed,
    defineComponent,
  } from 'vue';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    emits: {
      hello: (payload: string) => {
        // validate payload by returning a boolean
        return payload;
      },
    },
    setup(props: any, { emit }) {
      const count = ref(0);
      const state: any = reactive({
        reactiveField: 0,
        a: [
          {
            a: 1,
          },
        ],
        double: computed(() => state.reactiveField * 2),
      });
      function increment() {
        state.reactiveField++;
      }
      const addRef = () => {
        count.value++;
      };
      const addReactive = () => {
        state.reactiveField++;
      };
      const addA = () => {
        state.a[0].a++;
      };
      function sayHello() {
        emit('hello', 'hello');
      }
      const theme = inject('Theme', 'light');
      console.log(theme, '依赖注入');
      onBeforeMount(() => {
        const a = 0;
        const b = ref(0);
        const c = reactive({ x: 'hello' });
        const d = { x: 'hello' };
        console.log(a, b);
        console.log(c, d, toRefs(c));
        console.log('onBeforeMount');
      });

      // 简单监听
      watch(count, () => {
        console.log(count.value);
      });
      // 下面直接监听data.state会报错。watch 监听的目标只能是getter/effect函数、ref、reactive对象或数组。
      // watch(data.state, (newValue, oldValue) => {
      //   console.log('newValue', newValue)
      //   console.log('oldValue', oldValue)
      // })

      // 监听 新的值和旧值
      watch(
        () => state.reactiveField,
        (newValue, oldValue) => {
          console.log('newValue', newValue);
          console.log('oldValue', oldValue);
        }
      );
      watchEffect(() => {
        console.log('watchEffect', state.reactiveField);
      });
      // watch 监听多个属性，返回的也是多个值的数组
      watch([() => state.reactiveField, () => state.a[0].a], (newValue, oldValue) => {
        console.log('old', oldValue);
        console.log('new', newValue);
      });

      // watchEffect 不需要指定监听的属性
      watchEffect(() => {
        console.log('watchEffect ===>', state.reactiveField);
      });
      onMounted(() => {
        console.log('onMounted');
      });
      onBeforeUpdate(() => {
        console.log('onBeforeUpdate');
      });
      onUpdated(() => {
        console.log('onUpdated');
      });
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount');
      });
      onUnmounted(() => {
        console.log('onUnmounted');
      });
      onActivated(() => {
        console.log('onActivated');
      });
      onDeactivated(() => {
        console.log('onDeactivated');
      });
      onErrorCaptured(() => {
        console.log('onErrorCaptured');
      });
      return {
        count,
        sayHello,
        ...toRefs(state),
        increment,
        addA,
        addRef,
        addReactive,
      };
    },
  };
</script>
