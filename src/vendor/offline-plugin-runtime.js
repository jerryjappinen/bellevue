import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import buildConfig from '@config/build'

const runtime = (buildConfig.offline ? OfflinePluginRuntime : null)
if (runtime) {
	runtime.install()
}

export default runtime
