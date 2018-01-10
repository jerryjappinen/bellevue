import { getters, mutations, actions } from '@store/myModule'

describe('Vuex myModule', () => {



	describe('getters', () => {

		describe('doubleCount', () => {

			const assert = function (count, expected) {
				expect(
					getters.doubleCount({
						count
					})
				).toEqual(expected)
			}

			it('is 0', () => {
				assert(0, 0)
			})

			it('is 4', () => {
				assert(2, 4)
			})

			it('is -4', () => {
				assert(-2, -4)
			})

		})

	})



	describe('mutations', () => {

		describe('increment', () => {

			const assert = function (from, to) {
				const state = { count: from }
				mutations.increment(state)
				expect(state.count).toEqual(to)
			}

			it('gives -1', () => {
				assert(-2, -1)
			})

			it('gives 0', () => {
				assert(-1, 0)
			})

			it('gives 1', () => {
				assert(0, 1)
			})

			it('gives 2', () => {
				assert(1, 2)
			})

			it('gives 3', () => {
				assert(2, 3)
			})

		})

	})



	describe('actions', () => {

		describe('incrementToEven', () => {

			// Mock state and commit for action
			const assert = function (from, expectedCount) {

				const state = {
					count: from
				}

				const commit = (mutation, payload) => {
					expect(state.count + payload).toEqual(expectedCount)
				}

				actions.incrementToEven({ state, commit })
			}

			it('increments -3 to -2', () => {
				assert(-3, -2)
			})

			it('increments -2 to 0', () => {
				assert(-2, 0)
			})

			it('increments -1 to 0', () => {
				assert(-1, 0)
			})

			it('increments 0 to 2', () => {
				assert(0, 2)
			})

			it('increments 1 to 2', () => {
				assert(1, 2)
			})

			it('increments 2 to 4', () => {
				assert(2, 4)
			})

			it('increments 3 to 4', () => {
				assert(3, 4)
			})

		})

	})



})
