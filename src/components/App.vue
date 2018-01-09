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

.c-app-menu {
	@include flex;
	background-color: $color-white;
	border-bottom-width: 1px;

	a {
		@include flex-item-fluid;
		@include pad-loose;
		text-align: center;

		border-color: transparent;
		border-bottom-width: $separate-thick;

		&:hover {
			@include background($color-very-light-grey);
		}

		&.is-exact-active {
			color: $default-color-link;
			border-color: $default-color-link;
		}

	}

}

</style>
