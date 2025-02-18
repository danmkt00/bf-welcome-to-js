'use strict';

const newArray = (arr) => {
  let newNums = arr.map((x) => 0);
  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y <= i; y++) {
      newNums[i] = newNums[i] + arr[y];
    }
  }
  return newNums;
};

const newArray2 = (arr) => {
  let newNums = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    newNums.push(sum);
  }
  return newNums;
};

const newArray3 = (arr) => {
  for (let i = 1; i < nums.length; i++) {
    arr[i] += arr[i - 1];
  }
  return arr;
};

let nums = [5, 245, 43, 2345, 234, 7];
console.log(newArray(nums));
console.log(newArray2(nums));
