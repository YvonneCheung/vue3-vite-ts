import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router/index';
import vuex from './store/index';

const app = createApp(App);
app.config.globalProperties.name = '我是全局属性';

app.use(router);
app.use(vuex);
app.mount('#app');
