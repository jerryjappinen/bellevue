import { mount } from 'vue-test-utils'
import { Bitmap } from '@components'

describe('Bitmap.vue', () => {

	describe('should render relative src', () => {

		const wrapper = mount(Bitmap, {
			propsData: {
				src: 'logo.png',
				showUnloaded: true,
				title: 'foo'
			}
		})

		it('with absolute mode detected', () => {
			expect(wrapper.vm.srcIsAbsolute).toEqual(false)
		})

		it('as <img>', () => {
			expect(wrapper.contains('img')).toBeTruthy()
		})

		it('with alt', () => {
			expect(wrapper.vm.$el.getAttribute('alt')).toEqual('foo')
		})

		it('with title', () => {
			expect(wrapper.vm.$el.getAttribute('title')).toEqual('foo')
		})

	})

	describe('should render absolute src', () => {

		const wrapper = mount(Bitmap, {
			propsData: {
				src: '//logo.png'
			}
		})

		it('with absolute mode detected', () => {
			expect(wrapper.vm.srcIsAbsolute).toEqual(true)
		})

	})

})
