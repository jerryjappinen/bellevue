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
		rel="nofollow"
		target="_blank"
		@click="onClick"><slot /></a>
</template>
