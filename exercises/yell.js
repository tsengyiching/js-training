'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

let yell = str => str.toUpperCase();

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('hello'), 'HELLO')
assert.deepStrictEqual(yell('bibi'), 'BIBI')
assert.deepStrictEqual(yell('HELLO'), 'HELLO')
assert.deepStrictEqual(yell('bibI'), 'BIBI')
//assert.fail('You must write your own tests')
// End of tests */
