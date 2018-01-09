<script>
export default {
	name: 'page',

	props: {

		buffer: {
			default: true,
			required: false
		},

		limit: {
			default: true,
			required: false
		}

	},

	computed: {

		_classes () {
			return {
				buffer: !!this.buffer,
				limit: !!this.limit
			}
		}

	}

}
</script>

<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<style lang="scss">

.c-page {
	@include keep-center;
}

.c-page-buffer {
	@include buffer;
	@include viewport-over-small {
		@include buffer-relative;
	}
}

.c-page-limit {
	@include limit-medium;
}

</style>

