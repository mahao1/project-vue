import Vue from 'vue'
import Router from 'vue-router'

import Pages from '../pages/Pages'
import Home from '../pages/Home'


Vue.use(Router)

export default new Router({
	mode: 'history', //去掉地址#  默认hash模式
	routes: [{
			path: '/',
			redirect: '/pages/'
		},
		{
			path: '/pages',
			component: Pages,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'Home',
          component: Home
        }
      ]
		}
	]
})
