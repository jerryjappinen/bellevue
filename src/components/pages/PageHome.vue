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
			<spinner />
			<external-link href="https://eiskis.gitbooks.io/bellevue/">See docs</external-link>
		</p>

	</div>
</template>

<style lang="scss">

	.c-page-home {

		img,
		svg,
		.c-spinner {
			width: 1em;
			height: 1em;
		}

	}

</style>
