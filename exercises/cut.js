'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

let cutFirst = str => str.slice(2);

let cutLast = str => str.slice(0, str.length - 2);

let cutFirstLast = str => str.slice(2, str.length - 2);

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirst('hello'), 'llo')
assert.deepStrictEqual(cutFirst('ho'), '')
assert.deepStrictEqual(cutFirst(''), '')
assert.deepStrictEqual(cutLast('hello'), 'hel')
assert.deepStrictEqual(cutLast('ho'), '')
assert.deepStrictEqual(cutLast(''), '')
assert.deepStrictEqual(cutFirstLast('hello'), 'l')
assert.deepStrictEqual(cutFirstLast('  bonjour  '), 'bonjour')
assert.deepStrictEqual(cutFirstLast('eeee'), '')
assert.deepStrictEqual(cutFirstLast('eee'), '')
assert.deepStrictEqual(cutFirstLast(''), '')

//assert.fail('You must write your own tests')
// End of tests */
