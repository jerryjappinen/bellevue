import getBasename from '@util/getBasename'

// Test cases
// These will be tested at the start, end and in the middle of the string
const testCases = {
	'http://example.com': 'example',
	'HTTP://EXAMPLE.COM/FOO': 'FOO',
	'HTTP://EXAMPLE.COM/FOO/': '',
	'foo.bar': 'foo',
	'./path/foo.bar': 'foo',
	'./path/foo.bar.bar': 'foo',
	'./path/foo': 'foo'
}

describe('Util getBasename', function () {
	for (const string in testCases) {
		it('`' + string + '` should be `' + testCases[string] + '`', function () {
			expect(getBasename(string)).toEqual(testCases[string])
		})
	}
})
