import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import home from '../components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: login},
    {path: '/home', component: home}
  ]
})
