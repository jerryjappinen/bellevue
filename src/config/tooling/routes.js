import requireFiles from '@util/requireFiles'

// NOTE: dependency to @components might cause webpack side effects when imported
// NOTE: when importing with requireFiles, we must access the default export via `.default`
// import * as components from '@components'
const components = requireFiles('@components', ['js', 'vue'])

export default [

	{
		path: '/',
		name: 'home',
		component: components.PageHome.default
	},

	{
		path: '/demo',
		name: 'demo',
		component: components.PageDemo.default
	}

]
