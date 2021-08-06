'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

let keepFirst = str => str.slice(0, 2);

let keepLast = str => str.slice(str.length - 2);

let keepFirstLast = str => str.slice(2, 4);

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirst('hello'), 'he')
assert.deepStrictEqual(keepFirst('ho'), 'ho')
assert.deepStrictEqual(keepFirst('w'), 'w')
assert.deepStrictEqual(keepFirst(''), '')
assert.deepStrictEqual(keepLast('hello'), 'lo')
assert.deepStrictEqual(keepLast('ho'), 'ho')
assert.deepStrictEqual(keepLast('e'), 'e')
assert.deepStrictEqual(keepLast(''), '')
assert.deepStrictEqual(keepFirstLast('hello'), 'll')
assert.deepStrictEqual(keepFirstLast('  bonjour  '), 'bo')
assert.deepStrictEqual(keepFirstLast('eeee'), 'ee')
assert.deepStrictEqual(keepFirstLast('eee'), 'e')
assert.deepStrictEqual(keepFirstLast(''), '')

//assert.fail('You must write your own tests')
// End of tests */
