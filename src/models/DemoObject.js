import Vue from 'vue'

export default Vue.extend({

	props: {

		title: {
			type: String,
			required: true
		},

		description: {
			type: String,
			required: false,
			default: null
		}

	},

	computed: {

		titleAndDescription () {
			return this.title + (this.description ? (': ' + this.description) : '')
		}

	}

})
