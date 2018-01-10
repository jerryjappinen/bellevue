export default {
	namespaced: true,

	// https://vuex.vuejs.org/en/state.html
	state () {
		return {
			count: 0
		}
	},

	// https://vuex.vuejs.org/en/getters.html
	getters: {

		doubleCount (state, getters, rootState) {
			return state.count * 2
		}

	},

	// https://vuex.vuejs.org/en/mutations.html
	mutations: {

		increment (state) {
			state.count++
		},

		incrementBy (state, n) {
			state.count += n
		}

	},

	// https://vuex.vuejs.org/en/actions.html
	actions: {

		increment ({ state, commit, rootState }) {
			commit('increment')
		},

		// NOTE: an action will be passed one `context` argument that we destructure here
		incrementToEven ({ state, commit, rootState }) {
			const remainder = (state.count % 2)
			commit('incrementBy', (2 - remainder))
		}

	}

}
