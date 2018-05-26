// This file sets up the main Vue instance
// Conventionally this is done in main.js, but here we set it up like any vendor library
// You can also use this file to set up Vue in your test harness or for other similar use cases



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Helpers
import { camelCase, kebabCase } from 'lodash'

// Each Vue plugin that needs setup
import './vue-meta'
import router from './vue-router'
import vuex from './vuex'

// NOTE: uncomment to enable `vue-analytics` (also see `config.analytics.js`)
import './vue-analytics'

import requireFiles from '@util/requireFiles'

// Globally registered Vue bits
// import * as components from '@components-global'
// import * as svgComponents from '@svg'
import * as directives from '@directives-global'
import * as filters from '@filters-global'
import * as mixins from '@mixins-global'



// Vue setup

// Config
Vue.config.productionTip = false



// Register all components on the top level

const components = requireFiles('@components', ['js', 'vue'])
const svgComponents = requireFiles('@components', 'svg')

components.keys().map((path) => {
	return Vue.component(kebabCase(path), components(path).default)
})

svgComponents.keys().map((path) => {
	return Vue.component(kebabCase('svg-' + path), svgComponents(path))
})

// Register global directives on the top level
for (const directiveName in directives) {
	Vue.directive(camelCase(directiveName), directives[directiveName])
}

// Register global filters on the top level
for (const filterName in filters) {
	Vue.filter(camelCase(filterName), filters[filterName])
}

// Register global mixins on the top level
for (const mixinName in mixins) {
	Vue.mixin(mixins[mixinName])
}



const options = {
	el: '#app',
	router,
	store: vuex,
	template: '<app></app>'
}

// Everything that's bootstrapped
export {
	Vue,
	options
}
