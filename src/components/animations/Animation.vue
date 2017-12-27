<script>
import { includes } from 'lodash'

export default {
	name: 'animation',

	// https://alligator.io/vuejs/vue-abstract-components/
	// https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/components/transition.js
	abstract: true,

	props: {

		name: {
			type: String,
			required: false
		},

		duration: {
			type: Number,
			required: false,
			default: 1000
		},

		count: {
			type: [Number, String],
			required: false,
			default: 'infinite'
		},

		direction: {
			type: String,
			required: false,
			default: 'normal'
		},

		disabled: {}

	},

	data () {
		return {}
	},

	computed: {

		isEnabled () {
			return this.name && !this.disabled ? true : false
		}

	},

	render (createElement) {
		try {
			const vnode = this.$slots.default[0]

			// Add style binding dynamically
			if (this.isEnabled && vnode) {

				if (!vnode.data) {
					vnode.data = {}
				}

				if (!vnode.data.style) {
					vnode.data.style = {}
				}

				vnode.data.style.animationName = this.name
				vnode.data.style.animationDuration = this.duration + 'ms'
				vnode.data.style.animationIterationCount = this.count
				vnode.data.style.animationDirection = this.direction
			}

			return vnode
		} catch (e) {
			throw new Error('<animation> can only render one child component. (' + e.message + ')')
		}
	}

}
</script>

<style lang="scss">

</style>

