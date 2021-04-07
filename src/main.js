import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import Axios from './axios/index.js'
import './assets/css/main.css'

var app = createApp(App);
installElementPlus(app);
app.use(store);
app.use(router);
app.mount('#app');

// 导入封装好的axios并挂载到Vue全局属性上
app.config.globalProperties.$axios = Axios