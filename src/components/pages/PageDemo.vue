<script>
import { build, meta, paths, styles } from '@config'
import network from '@services/network'
import time from '@services/time'
import viewport from '@services/viewport'

export default {
	name: 'page-demo',

	computed: {

		config () {
			return {
				build,
				meta,
				paths,
				styles
			}
		},

		_classes () {
			return {
				debug: build.isDebug ? true : false
			}
		},

		width () {
			return viewport.width
		},

		height () {
			return viewport.height
		},

		time () {
			return time.current
		},

		isOffline () {
			return !network.isOnline
		}

	}

}
</script>

<template>
	<div :class="classes">

		<card>

			<h1>Bellevue</h1>

			<div class="bodytext">

				<p>Thanks for using <strong>Bellevue</strong>! This is a full-featured frontend project template for modern single-page applications built on Vue.js and Webpack.</p>

				<ul>
					<li>Demo: <external-link href="https://vue.netlify.com/" target="_blank">bellevue.netlify.com</external-link></li>
					<li>Documentation: <external-link href="https://eiskis.gitbooks.io/bellevue/" target="_blank">eiskis.gitbooks.io/bellevue</external-link></li>
					<li>Source and issues: <external-link href="https://github.com/Eiskis/bellevue" target="_blank">github.com/Eiskis/bellevue</external-link></li>
				</ul>

			</div>

		</card>

		<card>
			<h2>Images</h2>

			<p>
				<img src="~@assets/logo.png" alt="Foo" title="Foo">
				<bitmap src="logo.png" title="Foo" />
				<svg-logo title="Foo" />
				<svg-logo title="Foo" />
			</p>

		</card>

		<card>

			<h2>Loading indicators</h2>

			<p>
				<spinner />
				<ellipsis />
			</p>

		</card>

		<card>
			<h2>Services</h2>

			<p>
				Network: {{ isOffline ? 'offline' : 'online' }}
			</p>

			<p>
				Time: {{ time }}
			</p>

			<p>
				Viewport: {{ width }} &times; {{ height }} px
			</p>

		</card>

		<card>
			<h2>Config</h2>

			<pre><code>{{ JSON.stringify(config, null, 2) }}</code></pre>

		</card>

	</div>
</template>

<style lang="scss">

.c-page-demo {

	img,
	svg {
		width: 4em;
		height: 4em;
	}

	svg:first-of-type {
		color: $color-purple;
	}

	svg:not(:first-of-type) {
		@include animation(c-page-demo-rainbow);
	}

	.c-spinner {
		width: 1em;
		height: 1em;
	}

}

@keyframes c-page-demo-rainbow {

	0% {
		color: $color-yellow;
	}

	50% {
		color: $color-blue;
	}

	100% {
		color: $color-yellow;
	}

}

</style>

