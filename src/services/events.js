import { camelCase, map } from 'lodash'
import Vue from 'vue'

export default new Vue({

	methods: {

		formatEventName (...eventNameParts) {
			return map(eventNameParts, (eventNamePart) => {
				return camelCase(eventNamePart)
			}).join(':')
		},



		// These are passed to Vue's internal event API

		addListener (eventName, callback) {
			return this.$on(eventName, callback)
		},

		removeListener (eventName, callback) {
			return this.$off(eventName, callback)
		},

		emit (eventName, ...payload) {
			return this.$emit(eventName, ...payload)
		}

	}

})
