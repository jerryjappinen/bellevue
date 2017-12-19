<script>
	export default {
		name: 'ellipsis',

		props: {
			loading: {
				default: true
			}
		},

		computed: {
			_classes () {
				return {
					loading: this.loading
				}
			}
		}

	}
</script>

<template>

	<!-- NOTE: Need to keep this on one line to not add whitespace -->
	<span :class="classes"><span class="c-ellipsis-bullet">.</span><span class="c-ellipsis-bullet">.</span><span class="c-ellipsis-bullet">.</span></span>

</template>

<style lang="scss">
	.c-ellipsis-loading {
		.c-ellipsis-bullet {
			$duration: 5 * $transition-veryslow;
			$delay: ($duration / 5) / 3;
			@include animation(pulse-delayed, $duration);

			&:nth-child(1) {
				animation-delay: 2 * $delay;
			}

			&:nth-child(2) {
				animation-delay: 1 * $delay;
			}

		}
	}
</style>
