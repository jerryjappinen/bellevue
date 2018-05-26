import isAbsoluteUrl from '@util/isAbsoluteUrl'

// Test cases
// These will be tested at the start, end and in the middle of the string
const testCases = {
	'http://example.com': true, // regular http absolute URL
	'HTTP://EXAMPLE.COM': true, // HTTP upper-case absolute URL
	'https://www.exmaple.com': true, // secure http absolute URL
	'ftp://example.com/file.txt': true, // file transfer absolute URL
	'//cdn.example.com/lib.js': true, // protocol-relative absolute URL
	'/myfolder/test.txt': false, // relative URL
	'test': false // also relative URL
}

describe('Util isAbsoluteUrl', function () {
	for (const string in testCases) {
		it('`' + string + '` should be `' + testCases[string] + '`', function () {
			expect(isAbsoluteUrl(string)).toEqual(testCases[string])
		})
	}
})
