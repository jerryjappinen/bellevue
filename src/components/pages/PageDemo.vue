<script>
import { build, meta, styles } from '@config'
import network from '@services/network'
import time from '@services/time'

export default {
	name: 'page-demo',

	computed: {

		config () {
			return {
				build,
				meta,
				styles
			}
		},

		_classes () {
			return {
				debug: build.isDebug ? true : false
			}
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
				<img src="~@assets/logo.png">
				<bitmap src="logo.png" />
				<svg-logo />
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
				Time: {{ time }}
			</p>

			<p>
				Network: {{ isOffline ? 'offline' : 'online' }}
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

	svg {
		color: $color-blue;
	}

	.c-spinner {
		width: 1em;
		height: 1em;
	}

}

</style>

