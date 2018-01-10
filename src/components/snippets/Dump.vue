<script>
import { isNumber, isString } from 'lodash'

export default {
	name: 'dump',

	props: {
		value: {
			required: false
		}
	},

	computed: {
		content () {
			if (isNumber(this.value) || isString(this.value)) {
				return this.value
			}
			return JSON.stringify(this.value, null, 2)
		}
	}

}
</script>

<template>
	<pre :class="classes"><code>{{ content }}</code></pre>
</template>

<style lang="scss">
.c-dump {
	@include radius;
	@include background($color-very-light-grey);
	@include pad;
}
</style>
