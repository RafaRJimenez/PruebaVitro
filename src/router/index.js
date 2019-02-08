import Vue from 'vue'
import Router from 'vue-router'
import CreateIncidence from '@/components/CreateIncidence'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateIncidence',
      component: CreateIncidence
    }
  ]
})
