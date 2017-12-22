<script>
export default {
	name: 'card'
}
</script>

<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<style lang="scss">
.c-card {
	@include buffer;
	@include radius;
	@include shadow;
	background-color: $color-white;
}
</style>

