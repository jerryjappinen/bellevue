// https://matteogabriele.gitbooks.io/vue-analytics/content/docs/installation.html
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import analyticsConfig from '@config/analytics'
import routerInstance from './vue-router'

// Avoid registering this without ID
// NOTE: if you import this file, the library will still be in your bundle, increasing file size
if (analyticsConfig.id) {
	Vue.use(VueAnalytics, {
		...analyticsConfig,
		router: routerInstance
	})
}

export default VueAnalytics
