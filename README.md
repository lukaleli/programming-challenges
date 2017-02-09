# Programming challenges

## [tv-time](https://github.com/lukaleli/programming-challenges/blob/master/tv-time.js)

There's a room with a TV and people are coming in and out to watch it. The TV is on only when there's at least a person in the room. 
For each person that comes in, we record the start and end time. We want to know for how long the TV has been on. In other words: 
Given a list of arrays of time intervals, write a function that calculates the total amount of time covered by the intervals. 
For example: 

```
# input = [[1,4], [2,3]] 
# > 3 
# input = [[4,6], [1,2]] 
# > 3 
# input = [[1,4], [6,8], [2,4], [7,9], [10, 15]] 
# > 11
```

## [kata02-karate-chop](https://github.com/lukaleli/programming-challenges/blob/master/kata02-karate-chop.js)

Write a binary chop method that takes an integer search target and a sorted array of integers. It should return the integer index of the target in the array, or -1 if the target is not in the array. The signature will logically be:

```
chop(int, array_of_int)  -> int
```

You can assume that the array has less than 100,000 elements. For the purposes of this Kata, time and memory performance are not issues (assuming the chop terminates before you get bored and kill it, and that you have enough RAM to run it).