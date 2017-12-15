<script>
	export default {
		name: 'page-home',

		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<template>
	<div :class="classes">

		<h1>{{ msg }}</h1>

		<p>
			<img src="~@assets/logo.png">
			<svg-chip />
		</p>

	</div>
</template>

<style lang="scss">
	// .c-page-home {}
</style>
