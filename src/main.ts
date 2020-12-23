import { createApp } from 'vue';
import App from './App.vue';
// import router from './router/index';
import vuex from './store/index';

//css style
// import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);
app.config.globalProperties.name = '我是全局属性';

// app.use(router);
app.use(vuex);
// app.use(Element);
app.mount('#app');
