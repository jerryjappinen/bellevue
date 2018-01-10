<script>
import { kebabCase } from 'lodash'

export default {
	name: 'spinner',

	props: {
		src: {}
	},

	computed: {
		_classes () {
			return {
				[kebabCase(this.src)]: true
			}
		}
	}

}
</script>

<template>
	<vector :class="classes" :src="src" />
</template>

<style lang="scss">

.c-icon {
	width: 1em;
	height: 1em;
}
</style>
