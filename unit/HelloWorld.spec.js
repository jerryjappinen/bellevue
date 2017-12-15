import { mount } from 'vue-test-utils'
import { HelloWorld } from '@components'
// import { Vue } from '@vue-setup'

describe('HelloWorld.vue', () => {
	// const Constructor = Vue.extend(HelloWorld)
	// const vm = new Constructor().$mount()
	const wrapper = mount(HelloWorld, {})

	it('should render title element', () => {
		expect(wrapper.contains('h1'))
	})

	it('should render correct contents', () => {
		expect(wrapper.vm.$el.querySelector('.c-hello-world h1').textContent)
			.toEqual('Welcome to Your Vue.js App')
	})

})
