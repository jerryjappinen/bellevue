<script>
	import '@global-styles'

	export default {
		name: 'app',

		computed: {

			_classes () {
				return {
					foo: !!this.foo
				}
			},

			routerKey () {
				return this.$route.name
			}

		}

	}
</script>

<template>
	<div class="c-app" :class="classes">

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

		img,
		svg {
			width: 6em;
			height: 6em;
		}

	}
</style>
