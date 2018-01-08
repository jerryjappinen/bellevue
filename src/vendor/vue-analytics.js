// https://matteogabriele.gitbooks.io/vue-analytics/content/docs/installation.html
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import { analytics } from '@config'
import routerInstance from './vue-router'

Vue.use(VueAnalytics, {
	...analytics,
	router: routerInstance
})

export default VueAnalytics
