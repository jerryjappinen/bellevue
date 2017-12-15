<script>
	import '@global-styles'

	import { env } from '@config'

	export default {
		name: 'app',

		computed: {

			_classes () {
				return {
					debug: env.isDebug ? true : false
				}
			},

			routerKey () {
				return this.$route.name
			}

		}

	}
</script>

<template>
	<div :class="classes">

		<ul>
			<li><router-link :to="{ name: 'home' }">Home</router-link></li>
			<li><router-link :to="{ name: 'settings' }">Settings</router-link></li>
		</ul>

		<fade>
			<router-view :key="routerKey"></router-view>
		</fade>

	</div>
</template>

<style lang="scss">

	.c-app {
		@include buffer-relative;
	}

</style>
