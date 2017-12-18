import trimWhitespace from '@util/trimWhitespace'

// Test cases
// These will be tested at the start, end and in the middle of the string
const whitespaceStrings = {
	space: ' ',
	spaces: '    ',
	tab: '\t',
	tabAndSpace1: ' ' + '\t',
	tabAndSpace2: ' ' + '\t',
	tabAndSpace3: ' ' + '\t' + ' ',
	tabAndMultipleSpaces1: '    ' + '\t',
	tabAndMultipleSpaces2: '    ' + '\t',
	tabAndMultipleSpaces3: '    ' + '\t' + '    ',
	tabAndMultipleSpacesAndTabs1: '    ' + '\t',
	tabAndMultipleSpacesAndTabs2: '    ' + '\t',
	tabAndMultipleSpacesAndTabs3: '    ' + '\t' + '    ',
	newline: '\n',
	newlines: '\n\n\n'
}

describe('Util trimWhitespace with trailing whitespace', function () {

	// Expected result is the same for all these test cases
	const expectedResult = 'Foooo'

	// Test this with each of the test cases provided above
	for (let key in whitespaceStrings) {
		it('should trim ' + key, function () {

			// Whitespace is at the end of string
			expect(trimWhitespace(expectedResult + whitespaceStrings[key])).toEqual(expectedResult)

		})
	}

})

describe('Util trimWhitespace with leading whitespace', function () {

	// Expected result is the same for all these test cases
	const expectedResult = 'Foooo'

	// Test this with each of the test cases provided above
	for (let key in whitespaceStrings) {
		it('should trim ' + key, function () {

			// Whitespace is at the start of string
			expect(trimWhitespace(whitespaceStrings[key] + expectedResult)).toEqual(expectedResult)

		})
	}

})

describe('Util trimWhitespace with excess whitespace', function () {

	// Expected result is the same for all these test cases
	const partOne = 'Foo'
	const partTwo = 'oo'
	const expectedResult = partOne + ' ' + partTwo

	// Test this with each of the test cases provided above
	for (let key in whitespaceStrings) {
		it('should trim ' + key, function () {

			// Whitespace is injected in the middle
			expect(trimWhitespace(partOne + whitespaceStrings[key] + partTwo)).toEqual(expectedResult)

		})
	}

})
