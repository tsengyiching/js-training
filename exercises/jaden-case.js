'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
/*
function jadenCase(str){
	let arr = str.toLowerCase().split(' ');
	for (let i = 0; i < arr.length; i++){
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join(' ');
}
*/
const jadenCase = str => str
	.toLowerCase()
	.split(' ')
	.map(str => `${str[0].toUpperCase()}${str.slice(1)}`)
	.join(' ')


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('hoJJO woLLLL !'), 'Hojjo Wollll !')
assert.strictEqual(jadenCase('Bonjour Louis !'), 'Bonjour Louis !')
assert.strictEqual(jadenCase('how old are you ?'), 'How Old Are You ?')
assert.strictEqual(jadenCase('HEY'), 'Hey')
//assert.fail('You must write your own tests')
// End of tests */
