<script>
// Wrapper component for reducing boilerplate with transition
import { includes } from 'lodash'

const modes = ['out-in', 'simultaneous', 'in-out']
const defaultMode = modes[0]

export default {
	name: 'custom-transition',

	props: {

		name: {
			type: String,
			default: null
		},

		mode: {
			type: String,
			required: false,
			default: defaultMode,

			// Accept empty string or any of the modes as input, in addition to empty values
			validator (value) {
				return includes(modes, value)
			}

		},

		appear: {}

	},

	computed: {

		// NOTE
		// - Vue's default transition has no name, but it behaves like a simultaneous transition
		// - Here we have to convert the named mode we support in this custom component to null so that Vue defaults to is
		modeForVue () {
			return this.mode === 'simultaneous' ? null : this.mode
		}

	},

	methods: {

		getClassName (step) {
			return this.name ? 'transition-' + this.name + '-' + step : 'on-' + step
		}

	}

}
</script>

<template>

	<!-- https://vuejs.org/images/transition.png -->
	<transition
		:name="'transition-' + name"
		:mode="modeForVue"
		:appear="appear"

		:enter-class="getClassName('enter')"
		:enter-active-class="getClassName('enter-active')"
		:enter-to-class="getClassName('enter-to')"
		:leave-class="getClassName('leave')"
		:leave-active-class="getClassName('leave-active')"
		:leave-to-class="getClassName('leave-to')"
		:appear-class="getClassName('appear')"
		:appear-to-class="getClassName('appear-to')"
		:appear-active-class="getClassName('appear-active')">
		<slot />
	</transition>

</template>
