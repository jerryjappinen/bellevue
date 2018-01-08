// NOTE: dependency to @components might cause webpack side effects when imported
import * as components from '@components'

export default [

	{
		path: '/',
		name: 'home',
		component: components.PageHome
	},

	{
		path: '/demo',
		name: 'demo',
		component: components.PageDemo
	}

]
