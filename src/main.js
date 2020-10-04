import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './Axios/index.js'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './rem'
var width = document.body.scrollWidth;
console.log(width)
if (width > 750) {
  Vue.prototype.scrollWidth = false
} else { 
  Vue.prototype.scrollWidth = true
}
Vue.use(router);
Vue.use(ViewUI);

Vue.use(api);
Vue.config.productionTip = false
require('./mock.js')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
