<script>
	import '@styles-global'

	import { build } from '@config'

	import network from '@services/network'

	export default {
		name: 'app',

		computed: {

			_classes () {
				return {
					debug: build.isDebug ? true : false
				}
			},

			isOffline () {
				return !network.isOnline
			},

			routerKey () {
				return this.$route.name
			}

		}

	}
</script>

<template>
	<div :class="classes">

		<p v-if="isOffline">Offline</p>
		<p v-else>Online</p>

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
