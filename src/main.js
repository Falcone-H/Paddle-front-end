import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/main.css'

var app = createApp(App);
installElementPlus(app);
app.use(store);
app.use(router);
app.mount('#app');