import { merge } from 'lodash'

// Base configs
// NOTE: anything under `./tooling` is not available here
import defaultBuild from '../config.build'
import defaultManifest from '../config.manifest'
import defaultMeta from '../config.meta'
import defaultPaths from '../config.paths'
import defaultRouter from '../config.router'
import defaultStyles from '../config.styles'
import defaultSvgo from '../config.svgo'

// Dev overrides
import devBuild from './config.dev.build'
// import devManifest from './config.dev.manifest'
import devMeta from './config.dev.meta'
import devPaths from './config.dev.paths'
// import devRouter from './config.dev.router'
// import devStyles from './config.dev.styles'
// import devSvgo from './config.dev.svgo'

// These will be exported
let build = merge({}, defaultBuild, devBuild)
let manifest = merge({}, defaultManifest)
let meta = merge({}, defaultMeta, devMeta)
let paths = merge({}, defaultPaths, devPaths)
let router = merge({}, defaultRouter)
let styles = merge({}, defaultStyles)
let svgo = merge({}, defaultSvgo)

export {
	build,
	manifest,
	meta,
	paths,
	router,
	styles,
	svgo
}
