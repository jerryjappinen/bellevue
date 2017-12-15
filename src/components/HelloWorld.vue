<script>
	export default {
		name: 'hello-world',

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
	</div>
</template>

<style lang="scss">
	// .c-hello-world {}
</style>
