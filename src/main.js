import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
import '../static/css/reset.css'
import { Button } from 'mint-ui'
import './mock/mockServer'
import loading from '../static/imgs/loading.gif'
import './filter/index'
Vue.config.productionTip = false

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
const isProd = process.env.NODE_ENV === 'production'
if (!isProd) {
  Vue.config.devtools = true
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
