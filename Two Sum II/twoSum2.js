// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

/**
 * これですが、two sumのハッシュバージョンと何が違うの？？？？
 * ソートされたから、もっと効率の良い方法があるってこと？
 * Two point方があります。
 *
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
// const twoSumII = function (nums, target) {
//   const hMap = new Map();
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     if (hMap.has(element)) {
//       return `We return [${hMap.get(element)}, ${index + 1}].`;
//     } else {
//       hMap.set(target - element, index + 1);
//     }
//   }
//   return `not found`;
// };
const twoSumII = function (nums, target) {
  let lP = 0;
  let rP = nums.length - 1;
  while (lP < rP) {
    let curSum = nums[lP] + nums[rP];
    if (curSum > target) {
      rP--;
    } else if (curSum < target) {
      lP++;
    } else {
      return `We return [${lP + 1}, ${rP + 1}].`;
    }
  }

  return `not found`;
};

console.log(twoSumII([2, 7, 11, 15], 9));
console.log(twoSumII([2, 3, 4], 6));
console.log(twoSumII([-1, 0], -1));
