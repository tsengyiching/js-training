'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
let whisper = str => str.toLowerCase();

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('HELLO'), 'hello')
assert.deepStrictEqual(whisper('bibi'), 'bibi')
assert.deepStrictEqual(whisper('HeLLO'), 'hello')
assert.deepStrictEqual(whisper('bibI'), 'bibi')

// assert.fail('You must write your own tests')
// End of tests */
