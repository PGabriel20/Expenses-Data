import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      icon: 'home', title: 'Home'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home')
  },
  {
    name: 'login',
    path: '/login',
    meta: { title: 'Login' },
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login')
  },
  {
    name: 'lista-gastos',
    path: '/lista-gastos  ',
    meta: { title: 'Lista Gastos', icon: 'list-ul' },
    component: () => import(/* webpackChunkName: "about" */ '../views/lista-gastos/ListaGastos')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `Expenses - ${to.meta.title}`

  if (!window.uid && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
