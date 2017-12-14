<script>
	export default {
		name: 'app'
	}
</script>

<template>
	<div id="app">
		<img src="./assets/logo.png">
		<router-view/>
	</div>
</template>

<style lang="scss">
	#app {
		@include buffer-relative;
	}
</style>
