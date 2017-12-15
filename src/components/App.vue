<script>
	import '@global-styles'

	import { classes } from '@mixins'

	export default {
		name: 'app',

		mixins: [classes],

		data () {
			return {
				foo: true
			}
		},

		computed: {

			classnames () {
				return {
					foo: !!this.foo
				}
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
		<img src="~@assets/logo.png">
		<svg-chip />

		<fade>
			<p key="foo" v-if="foo">Foo</p>
			<p key="bar" v-else>Bar</p>
		</fade>

		<p @click="setFoo">Toggle</p>

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
