import Vue from 'vue'
import VueRouter from 'vue-router'

import { router, routes } from '../config'

Vue.use(VueRouter)

export default new VueRouter({
	...router,
	routes
})
