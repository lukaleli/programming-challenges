/**
Write a binary chop method that takes an integer search target and a sorted array of integers. 
It should return the integer index of the target in the array, or -1 if the target is not in the array. 
The signature will logically be:

	chop(int, array_of_int)  -> int

You can assume that the array has less than 100,000 elements. For the purposes of this Kata, 
time and memory performance are not issues (assuming the chop terminates before you get bored 
and kill it, and that you have enough RAM to run it).
 */

const assert = require('assert');

function chop(target, source) {
    console.log('chop(' + target + ', ' + source + ')');
    if (!source || source.length === 0) {
        return -1;
    }
    let start = 0;
    let end = source.length;
    let midIndex = Math.floor(start + ((end - start) / 2));

    while (start !== end) {
        midIndex = Math.floor(start + ((end - start) / 2));
        let currentValue = source[midIndex];
        if (currentValue === target) {
            return midIndex;
        }
        if (currentValue < target) {
            start = midIndex + 1;
        } else {
            end = midIndex;
        }
    }

    return -1;
}

assert.equal(-1, chop(3, []))
assert.equal(-1, chop(3, [1]))
assert.equal(0, chop(1, [1]))

assert.equal(0, chop(1, [1, 3, 5]))
assert.equal(1, chop(3, [1, 3, 5]))
assert.equal(2, chop(5, [1, 3, 5]))
assert.equal(-1, chop(0, [1, 3, 5]))
assert.equal(-1, chop(2, [1, 3, 5]))
assert.equal(-1, chop(4, [1, 3, 5]))
assert.equal(-1, chop(6, [1, 3, 5]))

assert.equal(0, chop(1, [1, 3, 5, 7]))
assert.equal(1, chop(3, [1, 3, 5, 7]))
assert.equal(2, chop(5, [1, 3, 5, 7]))
assert.equal(3, chop(7, [1, 3, 5, 7]))
assert.equal(-1, chop(0, [1, 3, 5, 7]))
assert.equal(-1, chop(2, [1, 3, 5, 7]))
assert.equal(-1, chop(4, [1, 3, 5, 7]))
assert.equal(-1, chop(6, [1, 3, 5, 7]))
assert.equal(-1, chop(8, [1, 3, 5, 7]))

