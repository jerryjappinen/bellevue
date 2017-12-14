<script>
	export default {
		name: 'app',

		data () {
			return {
				foo: true
			}
		},

		computed: {

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
	<div class="c-app">
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
