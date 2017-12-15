import { merge } from 'lodash'

// Base configs
import defaultEnv from './config.env'
import defaultManifest from './config.manifest'
import defaultMeta from './config.meta'
// ESLint gives a false positive here for some reason
// eslint-disable-next-line import-extensions
import defaultRouter from './config.router'
import defaultSvgo from './config.svgo'

// Dev overrides
import devEnv from './config.dev.env'
// import devEnv from './config.dev.env'
// import devManifest from './config.dev.manifest'
// import devMeta from './config.dev.meta'
// import devRouter from './config.dev.router'
// import devSvgo from './config.dev.svgo'

// These will be exported
let env = merge({}, defaultEnv)
let manifest = merge({}, defaultManifest)
let meta = merge({}, defaultMeta)
let router = merge({}, defaultRouter)
let svgo = merge({}, defaultSvgo)

// Process overrides in development environment
if (process.env.NODE_ENV !== 'production') {
	merge(env, devEnv)
	// merge(manifest, devManifest)
	// merge(meta, devMeta)
	// merge(router, devRouter)
	// merge(svgo, devSvgo)
}

export {
	env,
	manifest,
	meta,
	router,
	svgo
}
