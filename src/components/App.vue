<script>
	export default {
		name: 'app'
	}
</script>

<template>
	<div class="c-app">
		<svg-chip />
		<img src="~@/assets/logo.png">
		<router-view></router-view>
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
