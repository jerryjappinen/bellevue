import Vue from 'vue'

export default new Vue({

	data () {
		return {
			isOnline: false
		}
	},

	computed: {
		isOffline () {
			return !this.isOnline
		}
	},

	created () {
		this.updateOnlineStatus()
		this.setListeners()
	},

	beforeDestroy () {
		this.removeListeners()
	},

	methods: {

		getOnlineStatus () {
			return window.navigator.onLine ? true : false
		},

		updateOnlineStatus () {
			this.isOnline = this.getOnlineStatus()
		},

		setListeners () {
			window.addEventListener('online', this.updateOnlineStatus)
			window.addEventListener('offline', this.updateOnlineStatus)
		},

		removeListeners () {
			window.removeEventListener('online', this.updateOnlineStatus)
			window.removeEventListener('offline', this.updateOnlineStatus)
		}

	}

})
