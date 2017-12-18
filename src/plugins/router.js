import Vue from 'vue'
import VueRouter from 'vue-router'

import { router } from '@config'
import routes from '@routes'

Vue.use(VueRouter)

export default new VueRouter({
	...router,
	routes
})
