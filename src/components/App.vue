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

		<div class="c-app-menu">
			<router-link :to="{ name: 'home' }">Home</router-link>
			<router-link :to="{ name: 'demo' }">Demo</router-link>
		</div>

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

.c-app-menu {
	@include flex;

	a {
		@include flex-item-fluid;
		@include pad-loose;
		text-align: center;
		border-bottom-width: $separate-thick;

		&.is-exact-active {
			color: $default-color-link;
			border-color: $default-color-link;
		}

	}

}

</style>
