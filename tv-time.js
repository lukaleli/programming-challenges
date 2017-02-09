const assert = require('assert');

function countTotalTime(intervals) {
    return intervals.sort((a, b) => a[0] - b[0])
        .reduce((state, item) => ({
            ans: state.ans + Math.max(item[1] - Math.max(item[0], state.ending), 0),
            ending: Math.max(state.ending, item[1])
        }), { ans: 0, ending: 0 }).ans;
}

assert.equal(3, countTotalTime([[1, 4], [2, 3]]));
assert.equal(3, countTotalTime([[4, 6], [1, 2]]));
assert.equal(11, countTotalTime([[1, 4], [6, 8], [2, 4], [7, 9], [10, 15]]));

