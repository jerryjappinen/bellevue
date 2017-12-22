// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

	'default e2e tests': (browser) => {

		// automatically uses dev Server port from /config.index.js
		// default: http://localhost:8080
		// see nightwatch.conf.js
		const devServer = browser.globals.devServerURL

		browser
			.url(devServer)
			.waitForElementVisible('.c-app', 5000)
			.assert.elementPresent('.c-page-home')
			.assert.containsText('h1', 'Bellevue')
			.assert.elementCount('img', 2)
			.end()

	}

}
