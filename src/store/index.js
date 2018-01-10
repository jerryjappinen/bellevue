import buildConfig from '@config/build'

import myModule from './myModule'

export default {

	// https://vuex.vuejs.org/en/strict.html
	strict: (buildConfig.isDebug ? true : false),

	// https://vuex.vuejs.org/en/plugins.html
	// plugins: [],

	// State split into modules
	// https://vuex.vuejs.org/en/modules.html
	modules: {
		myModule
	},

	// Global state
	state: {},
	getters: {},
	mutations: {},
	actions: {}

}
