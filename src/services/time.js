import Vue from 'vue'
import requestAnimationFrame from 'raf'

const intervalDuration = 1000

export default new Vue({

	data () {
		return {
			$_timer: null,
			current: new Date()
		}
	},

	methods: {

		$_setCurrentTime () {
			this.current = new Date()
		},

		$_onTimerUpdate () {
			requestAnimationFrame(this.$_setCurrentTime)
		},

		$_startTimer () {
			this.$_stopTimer()
			this.$_onTimerUpdate()
			this.$_timer = setInterval(this.$_onTimerUpdate, intervalDuration)
		},

		// NOTE: `current` will keep the last time but won't be updated
		$_stopTimer () {
			if (this.$_timer) {
				clearInterval(this.$_timer)
				this.$_timer = null
			}
		}

	},

	created () {
		this.$_onTimerUpdate()
		this.$_startTimer()
	},

	beforeDestroy () {
		this.$_stopTimer()
	}

})
