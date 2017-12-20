<script>
export default {
	name: 'fade',

	props: [
		'name',
		'mode',
		'appear'
	]

}
</script>

<template>
	<custom-transition
		name="fade"
		:mode="mode"
		:appear="appear"><slot /></custom-transition>
</template>
