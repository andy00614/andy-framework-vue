import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false
// ddd name
new Vue({
  render: h => h(App),
}).$mount('#app')
