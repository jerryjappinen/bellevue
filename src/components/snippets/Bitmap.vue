<script>
	import { isString } from 'lodash'
	import isAbsoluteUrl from '@util/isAbsoluteUrl'

	export default {
		name: 'bitmap',

		props: {

			// Path of the desired asset to use
			// NOTE: can be absolute, or within assets
			src: {
				type: String,
				required: false
			},

			// Set to truthy to not use use the ImagesLoaded directive and fade in
			showUnloaded: {
				default: false
			},

			title: {
				type: String,
				required: false
			}

		},

		data () {
			return {
				isHidden: true
			}
		},

		computed: {

			// NOTE: this is just here to abstract away how the prop is provided
			hideUntilLoaded () {
				return !this.showUnloaded
			},

			renderedTitle () {
				return isString(this.title) ? this.title.trim() : ''
			},



			// NOTE: gets the `hidden` classnames only when hideUntilLoaded is turned on
			_classes () {
				return {
					hidden: this.hideUntilLoaded && this.isHidden,
					wasHidden: this.hideUntilLoaded && !this.isHidden
				}
			},



			// Path handling

			srcIsAbsolute () {
				return isAbsoluteUrl(this.src)
			},

			normalizedSrc () {

				if (this.srcIsAbsolute) {
					return this.src
				}

				// NOTE:
				// - this is how you resolve a URL programmatically
				// - if we passed the URL directly to the template, it would be escaped
				try {
					return require('@assets/' + this.src)
				} catch (error) {
					return ''
				}
			}

		},

		methods: {
			onLoaded (event) {
				this.isHidden = false
			}
		},

		created () {
			if (this.hideUntilLoaded) {
				this.isHidden = true
			}
		}

	}
</script>

<template>

	<img
		v-images-loaded="onLoaded"
		:class="classes"
		:src="normalizedSrc"
		:alt="renderedTitle"
		:title="renderedTitle">

</template>

<style lang="scss">

	.c-bitmap-hidden,
	.c-bitmap-was-hidden {
		@include transition-fast(opacity);
	}

	.c-bitmap-hidden {
		opacity: 0;
	}

</style>
