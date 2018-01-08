// Runtime configs merged with dev overrides
import { merge } from 'lodash'

// Base configs
import defaultBuild from '../config.build'
import defaultManifest from '../config.manifest'
import defaultMeta from '../config.meta'
import defaultPaths from '../config.paths'
import defaultRouter from '../config.router'
import defaultStyles from '../config.styles'

// Dev overrides
import devBuild from './config.dev.build'
// import devManifest from './config.dev.manifest'
import devMeta from './config.dev.meta'
import devPaths from './config.dev.paths'
// import devRouter from './config.dev.router'
// import devStyles from './config.dev.styles'

// These will be exported
let build = merge({}, defaultBuild, devBuild)
let manifest = merge({}, defaultManifest /*, devManifest */)
let meta = merge({}, defaultMeta, devMeta)
let paths = merge({}, defaultPaths, devPaths)
let router = merge({}, defaultRouter /*, devRouter */)
let styles = merge({}, defaultStyles /*, devStyles */)

export {
	build,
	manifest,
	meta,
	paths,
	router,
	styles
}
