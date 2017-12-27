<script>
import { kebabCase } from 'lodash'

import trimWhitespace from '@util/trimWhitespace'

export default {

	name: 'vector',

	props: {

		// Id of the desired item in SVG sprite (should be same as original file name)
		src: {
			type: String,
			required: true
		},

		title: {
			type: String,
			required: false
		}

	},

	computed: {

		component () {
			return 'svg-' + kebabCase(this.src)
		},

		renderedTitle () {
			if (this.title) {
				var title = trimWhitespace(this.title)
				if (title.length < 0) {
					return title
				}
			}
			return null
		},

	}

}
</script>

<template>
	<component :class="classes" :is="component" />
</template>
