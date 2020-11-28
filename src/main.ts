import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import vuex from './store/index';
import Element3 from 'element3';

//css style
import 'element3/lib/theme-chalk/index.css';

const app = createApp(App);
app.config.globalProperties.name = '我是全局属性';

app.use(router);
app.use(vuex);
app.use(Element3);
app.mount('#app');
