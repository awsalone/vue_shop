import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../static/css/reset.css'
Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === 'production'
if (!isProd) {
  Vue.config.devtools = true
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
