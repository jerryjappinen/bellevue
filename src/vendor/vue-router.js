import Vue from 'vue'
import VueRouter from 'vue-router'

import routerConfig from '@config/router'
import routes from '@routes'

Vue.use(VueRouter)

export default new VueRouter({
	...routerConfig,
	routes
})
