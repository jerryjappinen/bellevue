import Vue from 'vue'
import Router from 'vue-router'

import * as components from '../components'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: components.HelloWorld
		}
	]
})
