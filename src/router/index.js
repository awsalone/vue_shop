import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login'
import Shop from '../views/Shop/Shop'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo'
import ShopRating from '../views/Shop/ShopRating/ShopRating'
// import Msite from '../views/Msite/Msite'
// import Order from '../views/Order/Order'
// import Profile from '../views/Profile/Profile'
// import Search from '../views/Search/Search'
// 路由懒加载
const Msite = () => import('../views/Msite/Msite')
const Order = () => import('../views/Order/Order')
const Profile = () => import('../views/Profile/Profile')
const Search = () => import('../views/Search/Search')

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
