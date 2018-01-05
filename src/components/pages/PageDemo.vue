<script>
import { build, meta, paths, styles } from '@config'
import network from '@services/network'
import time from '@services/time'
import viewport from '@services/viewport'

import createInstance from '@util/createInstance'
import desroyInstances from '@util/destroyInstances'

export default {
	name: 'page-demo',

	data () {
		return {

			demoAnimationEnabled: false,
			demoTransitionEnabled: true,

			demoObject: createInstance('DemoObject', {
				title: 'Foo',
				description: 'Bar'
			})
		}
	},

	computed: {

		_classes () {
			return {
				debug: build.isDebug ? true : false
			}
		},

		config () {
			return {
				build,
				meta,
				paths,
				styles
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

	},

	beforeDestroy () {
		desroyInstances(this.demoObject)
	},

	methods: {

		toggleAnimation () {
			this.demoAnimationEnabled = !this.demoAnimationEnabled
		},

		toggleTransition () {
			this.demoTransitionEnabled = !this.demoTransitionEnabled
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
			<h2>Components</h2>

			<h3>Bitmaps</h3>

			<p>
				<img src="~@assets/logo.png" alt="Foo" title="Foo">
				<bitmap src="logo.png" title="Foo" />
			</p>

			<h3>SVG assets</h3>

			<p>
				<svg-logo title="Foo" />
				<vector src="logo" />
				<svg-logo class="c-page-demo-colored" title="Foo" />
				<svg-logo class="c-page-demo-rainbow" title="Foo" />
			</p>

			<h3>Animations and transitions</h3>

			<p>

				<animation name="pulse" :disabled="!demoAnimationEnabled">
					<span>Foo</span>
				</animation>

				<fade>
					<span v-if="demoTransitionEnabled">Bar</span>
				</fade>

			</p>

			<p class="bodytext">
				Toggle:
				<button @click="toggleAnimation">animation</button>
				<button @click="toggleTransition">transition</button>
			</p>

			<h3>Loading indicators</h3>

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

			<p class="bodytext">
				<external-link href="https://eiskis.gitbooks.io/bellevue/app/services.html">Read docs</external-link>
			</p>

		</card>

		<card>
			<h2>Models</h2>

			<p>
				<code>demoObject.titleAndDescription</code>: {{ demoObject.titleAndDescription }}
			</p>

			<p class="bodytext">
				<external-link href="https://eiskis.gitbooks.io/bellevue/app/models.html">Read docs</external-link>
			</p>

		</card>

		<card>
			<h2>Config</h2>

			<div v-for="(value, key) in config" :key="key">

				<h3>{{ key }}</h3>

				<pre><code>{{ JSON.stringify(value, null, 2) }}</code></pre>

			</div>

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

	.c-spinner {
		width: 1em;
		height: 1em;
	}

}

.c-page-demo-colored {
	color: $color-purple;
}

.c-page-demo-rainbow {
	@include animation(c-page-demo-rainbow);
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

