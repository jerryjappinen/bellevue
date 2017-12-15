import { mount } from 'vue-test-utils'
import { PageHome } from '@components'
// import { Vue } from '@vue-setup'

describe('PageHome.vue', () => {
	// const Constructor = Vue.extend(PageHome)
	// const vm = new Constructor().$mount()
	const wrapper = mount(PageHome, {})

	it('should render title element', () => {
		expect(wrapper.contains('h1'))
	})

	it('should render correct contents', () => {
		expect(wrapper.vm.$el.querySelector('h1').textContent)
			.toEqual('Welcome to Your Vue.js App')
	})

})
