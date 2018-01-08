'use strict'
const _ = require('lodash')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)



// Custom config files (must be merged with dev values)
const buildConfigBase = require('../src/config/config.build.js')
const manifestConfigBase = require('../src/config/config.manifest.js')
const metaConfigBase = require('../src/config/config.meta.js')
const pathsConfigBase = require('../src/config/config.paths.js')

const buildConfigDev = require('../src/config/config.build.js')
const manifestConfigDev = require('../src/config/config.manifest.js')
const metaConfigDev = require('../src/config/config.meta.js')
const pathsConfigDev = require('../src/config/config.paths.js')

const buildConfig = _.merge({}, buildConfigBase, buildConfigDev)
const manifestConfig = _.merge({}, manifestConfigBase, manifestConfigDev)
const metaConfig = _.merge({}, metaConfigBase, metaConfigDev)
const pathsConfig = _.merge({}, pathsConfigBase, pathsConfigDev)

const offlineConfig = require('../src/config/tooling/config.offline.js')

// Passed to `index.html.ejs`
const templateConfig = {
  build: buildConfig,
  meta: metaConfig,
  paths: pathsConfig
}



const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html.ejs',
      favicon: null, // Favicon comes from static (like other app icons)
      config: templateConfig,
      inject: true
    }),
    new StylelintPlugin({

      // Normally the syntax is detected by style type,
      // but I need to set this for .vue files
      syntax: 'scss',
      configFile: 'src/.stylelintrc.js',
      files: [
        'src/**/*.s?(a|c)ss',
        'src/**/*.vue'
      ]

    }),
  ]
})

// Enable offline plugin
if (buildConfig.offline) {
  webpackConfig.plugins.push(new OfflinePlugin(offlineConfig))
}

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
