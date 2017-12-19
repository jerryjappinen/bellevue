import { mount } from 'vue-test-utils'
import { Bitmap } from '@components'

describe('Bitmap.vue', () => {

	describe('should render absolute src', () => {

		const wrapper = mount(Bitmap, {
			propsData: {
				src: 'https://vuejs.org/images/logo.png',
				showUnloaded: true,
				title: 'foo'
			}
		})

		it('with absolute mode detected', () => {
			expect(wrapper.vm.srcIsAbsolute).toEqual(true)
		})

		it('as <img>', () => {
			expect(wrapper.contains('img'))
		})

		it('with title', () => {
			expect(wrapper.vm.$el.getAttribute('title')).toEqual('foo')
		})

	})

})
