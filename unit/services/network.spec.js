import { defer } from 'lodash'
import network from '@services/network'

describe('Service network', () => {

	beforeEach(() => {
		network.isOnline = false
	})



	it('isOffline when not isOnline', () => {
		network.isOnline = false
		expect(network.isOffline).toEqual(true)
	})

	it('not isOffline when isOnline', () => {
		network.isOnline = true
		expect(network.isOffline).toEqual(false)
	})

	it('goes online with window event', () => {
		network.isOnline = false
		window.dispatchEvent(new Event('online'))
		defer(() => {
			expect(network.isOnline).toEqual(true)
		})
	})

	it('goes offline with window event', () => {
		network.isOnline = true
		window.dispatchEvent(new Event('offline'))
		defer(() => {
			expect(network.isOnline).toEqual(true)
		})
	})

})
