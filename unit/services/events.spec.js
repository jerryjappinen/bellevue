import { defer } from 'lodash'
import events from '@services/events'

describe('Service events', () => {

	// Event names

	describe('Service event formatEventName', () => {

		it('should generate simple name', () => {
			expect(events.formatEventName(
				'foo'
			)).toEqual('foo')
		})

		it('should join two parts with colon', () => {
			expect(events.formatEventName(
				'foo', 'bar'
			)).toEqual('foo:bar')
		})

		it('should join three parts with colons', () => {
			expect(events.formatEventName(
				'foo', 'bar', 'baz'
			)).toEqual('foo:bar:baz')
		})

		it('should convert parts to camelCase', () => {
			expect(events.formatEventName(
				'fooBar', 'bar-Bar', 'BAZ_BAZ'
			)).toEqual(
				'fooBar:barBar:bazBaz'
			)
		})

	})



	// Listener execution

	describe('Service event listeners execute', () => {

		it('after emit', () => {
			let testVar = false
			const testListener = () => {
				testVar = true
			}

			events.addListener('foo', testListener)
			events.emit('foo')

			defer(() => {
				events.removeListener('foo', testListener)
				expect(testVar).toEqual(true)
			})
		})

		it('with payload', () => {
			let testVar = false
			const testListener = (foo, bar) => {
				if (foo && bar) {
					testVar = true
				}
			}

			events.addListener('bar', testListener)
			events.emit('bar', true, true)

			defer(() => {
				events.removeListener('bar', testListener)
				expect(testVar).toEqual(true)
			})
		})

	})

})
