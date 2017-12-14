// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { kebabCase } from 'lodash'
import Vue from 'vue'

// Components and plugins
import * as components from './components'
import * as svgs from './svg'
import router from './router'

// Global styles
import './styles/global.scss'



// Vue setup

// Config
Vue.config.productionTip = false

// Register all components on the top level
for (const componentName in components) {
	Vue.component(kebabCase(componentName), components[componentName])
}
for (const svgName in svgs) {
	Vue.component(kebabCase('svg-' + svgName), svgs[svgName])
}



// Initialize the app
new Vue({
	el: '#app',
	router,
	template: '<app></app>'
})
