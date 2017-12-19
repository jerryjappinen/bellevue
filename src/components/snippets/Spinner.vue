<script>
	export default {
		name: 'spinner',

		props: {

			// Pixels
			width: {
				type: Number,
				default: (24 * 2)
			},

			// In pixels, when displayed at 1:1 width
			strokeWidth: {
				type: Number,
				default: 4
			}

		},

		computed: {

			viewBox () {
				return '0 0 ' + this.width + ' ' + this.width
			},

			strokeWidthValue () {
				return this.strokeWidth + 'px'
			},

			radius () {
				return ((this.width / 2) - this.strokeWidth) + 'px'
			},

			circlePosition () {
				return (this.width / 2) + 'px'
			}

		}

	}
</script>

<template>
	<svg
		:class="classes"
		role="img"
		title="Loading..."
		:viewBox="viewBox"
		:width="this.width + 'px'"
		:height="this.width + 'px'">
		<circle class="c-spinner-circle"
			:cx="circlePosition"
			:cy="circlePosition"
			:r="radius"
			:stroke-width="strokeWidthValue">
		</circle>
	</svg>
</template>

<style lang="scss">
	$spinnerSize: 48;
	$spinnerRadius: ($spinnerSize / 2) * 1px;

	.c-spinner-circle {
		fill: transparent;
		stroke: currentColor;

		stroke-dasharray: (3.14 * $spinnerSize) * 1px;
		stroke-dashoffset: 0;
		stroke-linecap: round;

		transform-origin: $spinnerRadius $spinnerRadius 0;

		@include animation(c-spinner-circle, 4s, linear);
	}

	@keyframes c-spinner-circle {

		0% {
			stroke-dashoffset: (0.66 * $spinnerSize) * 1px;
			transform: rotate(0deg);
		}

		50% {
			stroke-dashoffset: (3.14 * $spinnerSize) * 1px;
			transform: rotate(720deg);
		}

		100% {
			stroke-dashoffset: (0.66 * $spinnerSize) * 1px;
			transform: rotate(1080deg);
		}

	}

</style>
