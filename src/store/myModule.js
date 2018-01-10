// https://vuex.vuejs.org/en/state.html
export const state = () => {
	return {
		count: 0
	}
}



// https://vuex.vuejs.org/en/getters.html
export const getters = {

	// args: (state, getters, rootState)
	doubleCount (state) {
		return state.count * 2
	}

}



// https://vuex.vuejs.org/en/mutations.html
export const mutations = {

	increment (state) {
		state.count++
	},

	incrementBy (state, n) {
		state.count += n
	}

}



// https://vuex.vuejs.org/en/actions.html
export const actions = {

	// NOTE: an action will be passed one `context` argument that we destructure here
	// args: (state, getters, rootState)
	increment ({ commit }) {
		commit('increment')
	},

	incrementToEven ({ state, commit }) {
		const remainder = (state.count % 2)
		commit('incrementBy', (2 - Math.abs(remainder)))
	}

}



export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
