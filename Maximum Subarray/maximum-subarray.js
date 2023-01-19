// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   let max = [nums[0], 0, 0];
//   let sum = nums[0];
//   for (let index = 1; index < nums.length; index++) {
//     const element = nums[index];
//     if (sum < 0) {
//       if (element >= sum) {
//         // sum: -5  element: -2 or 2
//         sum = element;
//         max[0] = element;
//         max[1] = index;
//         max[2] = index;
//       } else {
//         // sum: -5 element: -7
//         sum = sum + element;
//       }
//     } else {
//       if (element >= 0) {
//         sum = sum + element;
//         if (sum > max[0]) {
//           max[0] = sum;
//           max[2] = index;
//         }
//       } else {
//         sum = sum + element;
//       }
//     }
//   }
//   return max;
// };

// more simple
// ただ全部負数の場合は、だめよね。あら、行けた！！
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let curSum = 0;
  for (let index = 0; index < nums.length; index++) {
    if (curSum < 0) curSum = 0;
    const element = nums[index];
    curSum = curSum + element;
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-5, -4, -1, -7, -8]));
