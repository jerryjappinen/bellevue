import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { build as buildConfig } from '@config'
const runtime = (buildConfig.offline ? OfflinePluginRuntime : null)

if (runtime) {
	runtime.install()
}

export default runtime
