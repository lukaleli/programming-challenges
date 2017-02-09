const assert = require('assert');

function compress(str) {
    let compressed = '';
    for (let i = 0; i < str.length; i++) {
        let prevChar = str.charAt(i);
        let charCount = 1;
        for (let j = i + 1; j < str.length; j++) {
            if (str.charAt(j) === prevChar) {
                charCount++;
            } else {
                break;
            }
        }
        compressed += prevChar + (charCount > 1 ? charCount : '');
        i += charCount - 1;
    }
    return compressed;
}

assert.equal('abca3b3', compress('abcaaabbb'));
assert.equal('abcd', compress('abcd'));
assert.equal('a3ba4c2a4ba', compress('aaabaaaaccaaaaba'));
