import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.axios=axios
Vue.config.productionTip = false
//vant--ui
import { Popup } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Popup);
//模拟数据
require("./mock/index.js")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
