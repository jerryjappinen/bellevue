import { debounce } from 'lodash'
import Vue from 'vue'

import config from '@config'

// Scroll position or dimensions are updated at most once per this amount of ms
const debounceDelay = 10

export default new Vue({

	data() {
		return {
			width: 0,
			height: 0,
			scrollX: 0,
			scrollY: 0
		}
	},

	computed: {

		isScrolled () {
			return this.scrollY > 0 ? true : false
		},

		isScrolledX () {
			return this.scrollX > 0 ? true : false
		},

		isLandscape () {
			return this.width > this.height ? true : false
		},

		isPortrait () {
			return !this.isLandscape
		}

	},

	created () {
		this.$_updateDimensions()
		this.$_updateScrollValues()

		// Bind listeners
		// FIXME: can/should I use this.$on (i.e. Vue's vustom events, NOT a wrapper for addEventListener)?
		window.addEventListener('resize', this.onResize)
		window.addEventListener('scroll', this.onScroll)

	},

	beforeDestroy () {

		// Remove listeners
		window.removeEventListener('resize', this.onResize)
		window.removeEventListener('scroll', this.onScroll)

	},

	methods: {



		// Helpers

		$_getScrollX () {
			return (window.pageXOffset || window.document.scrollLeft || 0) - (window.document.clientLeft || 0)
		},

		$_getScrollY () {
			return (window.pageYOffset || window.document.scrollTop || 0) - (window.document.clientTop || 0)
		},

		$_getWidth() {
			return window.innerWidth
		},

		$_getHeight () {
			return window.innerHeight
		},



		// Throttled updaters

		$_updateDimensions () {
			this.width = this.$_getWidth()
			this.height = this.$_getHeight()
		},

		$_updateScrollValues () {
			this.scrollX = this.$_getScrollX()
			this.scrollY = this.$_getScrollY()
		},

		// NOTE: won't work with arrow function since `this` scope will be different
		onResize: debounce(function () {
			this.$_updateDimensions()
		}, debounceDelay, {
			leading: true
		}),

		onScroll: debounce(function () {
			this.$_updateScrollValues()
		}, debounceDelay, {
			leading: true
		})

	}

})
