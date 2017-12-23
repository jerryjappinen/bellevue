import { merge } from 'lodash'

// Base configs
// NOTE: anything under `./tooling` is not available here
// NOTE: ESLint gives a false positive here for some reason

export { default as build } from './config.build'
export { default as manifest } from './config.manifest'
export { default as meta } from './config.meta'
export { default as paths } from './config.paths'
export { default as router } from './config.router'
export { default as styles } from './config.styles'
export { default as svgo } from './config.svgo'
