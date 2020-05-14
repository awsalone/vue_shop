import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Search from '../views/Search/Search'
import Login from '../views/Login/Login'
import Shop from '../views/Shop/Shop'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo'
import ShopRating from '../views/Shop/ShopRating/ShopRating'

Vue.use(VueRouter)

const routes = [{
  path: '/msite',
  component: Msite,
  meta: {
    showFooter: true
  }
}, {
  path: '/order',
  component: Order,
  meta: {
    showFooter: true
  }
}, {
  path: '/profile',
  component: Profile,
  meta: {
    showFooter: true
  }
}, {
  path: '/search',
  component: Search,
  meta: {
    showFooter: true
  }
}, {
  path: '/login',
  component: Login
}, {
  path: '/',
  redirect: '/msite'
},
{
  path: '/shop',
  component: Shop,
  children: [
    { path: '/goods', component: ShopGoods },
    { path: '/info', component: ShopInfo },
    { path: '/rating', component: ShopRating },
    { path: '', redirect: '/goods' }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
