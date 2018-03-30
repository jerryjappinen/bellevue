<script>
import buildConfig from '@config/build'
import metaConfig from '@config/meta'
import pathsConfig from '@config/paths'
import stylesConfig from '@config/styles'

import network from '@services/network'
import time from '@services/time'
import viewport from '@services/viewport'

import createInstance from '@util/createInstance'
import desroyInstances from '@util/destroyInstances'

export default {
	name: 'page-demo',

	// https://github.com/declandewet/vue-meta
	metaInfo () {
		return {
			title: 'Meta title',
			titleTemplate: '%s - Demo (' + this.$options.name + ')'
		}
	},

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
				debug: buildConfig.isDebug ? true : false
			}
		},

		config () {
			return {
				buildConfig,
				metaConfig,
				pathsConfig,
				stylesConfig
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
	<page :class="classes" :limit="false">

		<card>

			<h1>Bellevue</h1>

			<div class="bodytext">

				<p>Thanks for using <strong>Bellevue</strong>! This is a full-featured frontend project template for modern single-page applications built on Vue.js and Webpack.</p>

				<ul>
					<li>Demo: <external-link href="https://vue.netlify.com/demo" target="_blank">bellevue.netlify.com</external-link></li>
					<li>Documentation: <external-link href="https://eiskis.gitbooks.io/bellevue/" target="_blank">eiskis.gitbooks.io/bellevue</external-link></li>
					<li>Source and issues: <external-link href="https://github.com/Eiskis/bellevue" target="_blank">github.com/Eiskis/bellevue</external-link></li>
				</ul>

			</div>

		</card>

		<card class="c-page-demo-components">
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
				<vector class="c-page-demo-rainbow" src="cog" />
				<icon src="cog" />
			</p>

			<h3>Loading indicators</h3>

			<p>
				<spinner />
				<ellipsis />
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
				<button @click="toggleAnimation">Toggle animation</button>
				<button @click="toggleTransition">Toggle transition</button>
			</p>

		</card>

		<card>
			<h2>Filters</h2>

			<table>
				<tbody>
					<tr>
						<td><code v-html="'{{ 4.5 | ceil }}'" /></td>
						<td>{{ 4.5 | ceil }}</td>
					</tr>
					<tr>
						<td><code v-html="'{{ 4.5 | floor }}'" /></td>
						<td>{{ 4.5 | floor }}</td>
					</tr>
					<tr>
						<td><code v-html="'{{ 4.5 | round }}'" /></td>
						<td>{{ 4.5 | round }}</td>
					</tr>
					<tr>
						<td><code v-html="'{{ 4.52383 | decimal }}'" /></td>
						<td>{{ 4.52383 | decimal }}</td>
					</tr>
					<tr>
						<td><code v-html="'{{ 8 | decimal }}'" /></td>
						<td>{{ 8 | decimal }}</td>
					</tr>
				</tbody>
			</table>

			<p>
				{{ 8.2123123 | decimal }}
				{{ 8.2123123 | decimal(0) }}
				{{ 8.2123123 | decimal(4) }}
			</p>

			<p class="bodytext">
				<external-link href="https://eiskis.gitbooks.io/bellevue/app/vue.html">Read docs</external-link>
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

			<dump
				:value="{
					demoObject: {
						title: demoObject.title,
						description: demoObject.description,
						titleAndDescription: demoObject.titleAndDescription
					}
				}"
			/>

			<p class="bodytext">
				<external-link href="https://eiskis.gitbooks.io/bellevue/app/models.html">Read docs</external-link>
			</p>

		</card>

		<card>
			<h2>Vuex</h2>

			<!-- NOTE: if you use Vuex, it's better to use mapState, mapGetters and mapActions in your components instead of referring to `$store` directly as we do here -->

			<dump
				:value="{
					state: $store.state,
					getters: {
						'myModule.doubleCount': $store.getters['myModule/doubleCount']
					}
				}"
			/>

			<p class="bodytext">
				<button @click="$store.dispatch('myModule/increment')">increment</button>
				<button @click="$store.dispatch('myModule/incrementToEven')">incrementToEven</button>
			</p>

			<p class="bodytext">
				<external-link href="https://eiskis.gitbooks.io/bellevue/app/vuex.html">Read docs</external-link>
			</p>

		</card>

		<!-- One card per config -->
		<card v-for="(value, key) in config" :key="key">
			<h2><icon src="cog" /> <code>{{ key }}</code></h2>
			<dump :value="value" />
		</card>

	</page>
</template>

<style lang="scss">

.c-page-demo {

	button {
		&:not(:last-child) {
			@include push-tight-right;
		}
	}

	.c-spinner {
		width: 1em;
		height: 1em;
	}

	@include viewport-over-medium {
		@include limit-very-large;
		@include flex-wrap;

		> .c-card {
			@include flex-item-fixed;
			@include border-box;
			width: 49%;

			&:nth-child(2n) {
				margin-left: 2%;
			}

		}

	}

}

.c-page-demo-components {
	img,
	svg {
		width: 4em;
		height: 4em;
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

