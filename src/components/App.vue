<script>
	export default {
		name: 'app'
	}
</script>

<template>
	<div class="c-app">
		<img src="~@/assets/logo.png">
		<router-view></router-view>
	</div>
</template>

<style lang="scss">
	.c-app {
		@include buffer-relative;
	}
</style>
