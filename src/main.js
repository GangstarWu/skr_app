import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Aplayer from '@moefe/vue-aplayer'

Vue.config.productionTip = false
Vue.prototype.axios=axios
// axios.defaults.withCredentials=true;
Vue.use(ElementUI)
Vue.use(Aplayer,{
  defaultCover:'../public/img/album.jpg',
  productionTip:true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
