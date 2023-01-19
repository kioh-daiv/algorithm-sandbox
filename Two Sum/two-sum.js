// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   // my approach
//   // check if target - x exists , also if target < x then skip
//   // for (let index = 0; index < nums.length; index++) {
//   //   const element = nums[index];
//   //   if (nums.includes(target - element))
//   //     return [index, nums.indexOf(target - element)];
//   // }
//   // above doesn't work because the same value case;

//   // [3,2,4]
//   const count = nums.length;
//   let first = 0;
//   let second = 0;
//   while (first < count) {
//     const num = nums.shift();
//     second++;
//     if (nums.includes(target - num)) {
//       return [first, second + nums.indexOf(target - num)];
//     }
//     first++;
//   }

//   return [];
// };

// simply check one by one
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const base = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const pair = nums[j];
//       if (pair > target) continue;
//       if (base + pair === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

// how to solve this problem using hashmap?
const twoSum = function (nums, target) {
  const hashmap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (hashmap.has(target - element)) {
      return [hashmap.get(target - element), index];
    } else {
      hashmap.set(element, index);
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
