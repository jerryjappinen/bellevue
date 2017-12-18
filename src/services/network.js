import Vue from 'vue'

export default new Vue({

	data () {
		return {
			isOnline: false,
			isConnecting: true
		}
	},

	computed: {

		isOffline () {
			return !this.isOnline
		}

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

	},

	created () {
		this.updateOnlineStatus()
		this.isConnecting = false
		this.setListeners()
	},

	beforeDestroy () {
		this.removeListeners()
	}

})
