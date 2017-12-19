<script>
	export default {
		name: 'external-link',
		props: {
			href: {
				type: String
			}
		}
	}
</script>

<template>
	<a class="c-external-link" :href="href" target="_blank" rel="nofollow"><slot></slot></a>
</template>

<style lang="scss">
	// .c-external-link {}
</style>
