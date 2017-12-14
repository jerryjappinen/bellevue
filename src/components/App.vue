<script>
	import '@global-styles'

	import { composeClassnames } from '@util'

	export default {
		name: 'app',

		data () {
			return {
				foo: true
			}
		},

		computed: {

			classes () {
				return composeClassnames({
					foo: !!this.foo
				}, 'c-app')
			},

			routerKey () {
				return this.$route.name
			}

		},

		methods: {

			setFoo () {
				this.foo = !this.foo
			}

		}

	}
</script>

<template>
	<div class="c-app" :class="classes">
		<img src="~@/assets/logo.png" @click="setFoo">

		<fade>
			<svg-chip v-if="foo" />
		</fade>

		<router-view :key="routerKey"></router-view>

	</div>
</template>

<style lang="scss">
	.c-app {
		@include buffer-relative;

		img,
		svg {
			width: 6em;
			height: 6em;
		}

	}
</style>
