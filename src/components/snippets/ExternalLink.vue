<script>
export default {
	name: 'external-link',

	props: {
		href: {
			type: String
		}
	},

	methods: {
		onClick (event) {
			this.$emit('click', event)
		}
	}

}
</script>

<template>
	<a
		:class="classes"
		:href="href"
		target="_blank"
		@click="onClick"
		rel="nofollow"><slot /></a>
</template>
