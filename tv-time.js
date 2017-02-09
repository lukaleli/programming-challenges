/*
There's a room with a TV and people are coming in and out to watch it. The TV is on only when there's at least a person in the room. 
For each person that comes in, we record the start and end time. We want to know for how long the TV has been on. In other words: 
Given a list of arrays of time intervals, write a function that calculates the total amount of time covered by the intervals. 
For example: 

# input = [(1,4), (2,3)] 
# > 3 
# input = [(4,6), (1,2)] 
# > 3 
# input = {{1,4}, {6,8}, {2,4}, {7,9}, {10, 15}} 
# > 11
*/


/*var input = [
    [1, 4],
    [2, 3]
];*/

/*var input = [
    [4, 6],
    [1, 2]
];*/

var input = [
    [1, 4],
    [6, 8],
    [2, 4],
    [7, 9],
    [10, 15]
];

function countTotalTime(intervals) {
    return intervals.sort((a, b) => a[0] - b[0])
        .reduce((state, item) => ({
            ans: state.ans + item[1] - Math.max(item[0], state.ending),
            ending: Math.max(state.ending, item[1])
        }), { ans: 0, ending: 0 }).ans;
}

console.log('INPUT', input);
console.log('RESULT', countTotalTime(input));
