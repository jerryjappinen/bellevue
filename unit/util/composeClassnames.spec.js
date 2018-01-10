import composeClassnames from '@util/composeClassnames'

describe('Util composeClassnames', () => {

	it('should have default prefix', () => {
		expect(composeClassnames({
			foo: true
		})).toEqual([
			'is-foo'
		])
	})

	it('should have default prefix with value', () => {
		expect(composeClassnames({
			foo: 'bar'
		})).toEqual([
			'is-foo-bar'
		])
	})

	it('should output multiple classnames', () => {
		expect(composeClassnames({
			foo: true,
			bar: 'bar',
			count: 1
		})).toEqual([
			'is-foo',
			'is-bar-bar',
			'is-count-1'
		])
	})

	it('should not have falsy classnames', () => {
		expect(composeClassnames({
			foo: false,
			bar: null,
			count: 0,
			undef: undefined,
			empty: ''
		})).toEqual([])
	})

	it('should output kebab-case keys', () => {
		expect(composeClassnames({
			fooBar: true,
			FooBar: true,
			'foo-bar': true,
			'Foo-Bar': true,
			'Foo_Bar': true
		}, '')).toEqual([
			'foo-bar',
			'foo-bar',
			'foo-bar',
			'foo-bar',
			'foo-bar'
		])
	})

	it('should output kebab-case values', () => {
		expect(composeClassnames({
			'foo1': 'foo',
			'foo2': 'FOO',
			'foo3': 'FooBar',
			'foo4': 'foo-BAR',
			'foo5': 'foo_BAR'
		}, '')).toEqual([
			'foo-1-foo',
			'foo-2-foo',
			'foo-3-foo-bar',
			'foo-4-foo-bar',
			'foo-5-foo-bar'
		])
	})

	it('should insert prefixes', () => {
		expect(composeClassnames({
			foo: true,
			bar: 'bar'
		}, 'prefix')).toEqual([
			'prefix-foo',
			'prefix-bar-bar'
		])
	})

})
