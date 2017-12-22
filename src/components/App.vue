<script>
import '@styles-global'

export default {
	name: 'app',
	computed: {
		routerKey () {
			return this.$route.name
		}
	}
}
</script>

<template>
	<div :class="classes">

		<h1>Bellevue</h1>

		<ul>
			<li><router-link :to="{ name: 'home' }">Home</router-link></li>
			<li><router-link :to="{ name: 'demo' }">Demo</router-link></li>
		</ul>

		<fade>
			<router-view :key="routerKey" />
		</fade>

	</div>
</template>

<style lang="scss">
.c-app {
	@include buffer-relative;
	@include limit-medium;
	@include keep-center;
}
</style>
