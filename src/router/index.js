import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Login from './login'
import NetWork from './network'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => require(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  ...NetWork
];
const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
 
  from.meta.keepAlive = false  //修改为false
  
  next()
  
  })
export default router
