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
			<bitmap src="logo.png" />
			<svg-chip />
			<ellipsis />
		</p>

	</div>
</template>

<style lang="scss">

	.c-page-home {

		img,
		svg {
			width: 6em;
			height: 6em;
		}

	}

</style>
