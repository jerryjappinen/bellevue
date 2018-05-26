import { mount } from 'vue-test-utils'
import { ExternalLink } from '@components/snippets/ExternalLink'

describe('ExternalLink.vue', () => {

	describe('should render relative src', () => {

		const url = '//foo'
		const wrapper = mount(ExternalLink, {
			propsData: {
				href: url
			}
		})

		it('as <a>', () => {
			expect(wrapper.contains('a')).toBeTruthy()
		})

		it('with href', () => {
			expect(wrapper.vm.$el.getAttribute('href')).toEqual(url)
		})

		it('with target', () => {
			expect(wrapper.vm.$el.getAttribute('target')).toEqual('_blank')
		})

		it('with rel', () => {
			expect(wrapper.vm.$el.getAttribute('rel')).toEqual('nofollow')
		})

	})

})
