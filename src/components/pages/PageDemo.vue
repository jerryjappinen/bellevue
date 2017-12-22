<script>
import { build } from '@config'
import network from '@services/network'
import time from '@services/time'

export default {
	name: 'page-demo',

	computed: {

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

			<h2>Bellevue</h2>

			<div class="bodytext">

				<p>Thanks for using <strong>Bellevue</strong>! This is a full-featured frontend project template for modern single-page applications built on Vue.js and Webpack.</p>

				<ul>
					<li>Demo: <external-link href="https://vue.netlify.com/" target="_blank">vue.netlify.com</external-link></li>
					<li>Documentation: <external-link href="https://eiskis.gitbooks.io/bellevue/" target="_blank">eiskis.gitbooks.io/bellevue</external-link></li>
					<li>Source and issues: <external-link href="https://github.com/Eiskis/bellevue" target="_blank">github.com/Eiskis/bellevue</external-link></li>
				</ul>

			</div>

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
			<h2>Images</h2>

			<p>
				<img src="~@assets/logo.png">
				<bitmap src="logo.png" />
				<svg-chip />
			</p>

		</card>

		<card>

			<h2>Loading indicators</h2>

			<p>
				<ellipsis />
				<spinner />
			</p>

		</card>

	</div>
</template>

<style lang="scss">
.c-page-demo {
	img,
	svg,
	.c-spinner {
		width: 2em;
		height: 2em;
	}

	.c-card {
		@include push-vertical;
	}

}
</style>

