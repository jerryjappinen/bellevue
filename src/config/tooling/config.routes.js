// NOTE: this is NOT included in @config/index.js
// NOTE: dependency to @components might cause webpack side effects when imported
import * as components from '@components'

export default [

	{
		path: '/',
		name: 'home',
		component: components.PageHome
	},

	{
		path: '/settings',
		name: 'settings',
		component: components.PageSettings
	}

]
