// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { camelCase, kebabCase } from 'lodash'
import Vue from 'vue'

// Globally registered things
import * as components from '@components'
import * as svgComponents from '@svg'
import * as directives from '@directives-global'
import * as mixins from '@mixins-global'

// Each Vue plugin that needs setup
import router from '@plugins/router'



// Vue setup

// Config
Vue.config.productionTip = false

// Register all components on the top level
for (const componentName in components) {
	Vue.component(kebabCase(componentName), components[componentName])
}
for (const svgName in svgComponents) {
	Vue.component(kebabCase('svg-' + svgName), svgComponents[svgName])
}

// Register all directives on the top level
for (const directiveName in directives) {
	Vue.directive(camelCase(directiveName), directives[directiveName])
}

// Register some mixins on the top level
for (const mixinName in mixins) {
	Vue.mixin(mixins[mixinName])
}



const options = {
	el: '#app',
	router,
	template: '<app></app>'
}

// Everything that's bootstrapped

export {
	Vue,
	options
}
