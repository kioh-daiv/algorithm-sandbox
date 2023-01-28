// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
// the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected
// and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * 1. 自分と自分の前の前までの最大値
 * 2. 自分の前までの最大値
 * 上記の1. 2.の最大値を取る
 *
 * @param {*} nums
 * @return {*}
 */
const houseRobber = function (nums) {
  let prepre = 0;
  let pre = 0;
  let max = 0;
  for (let index = 0; index < nums.length; index++) {
    const current = nums[index];
    max = Math.max(current + prepre, pre);
    prepre = pre;
    pre = max;
  }
  return max;
};

console.log(houseRobber([1, 2, 3, 1])); // 4
console.log(houseRobber([2, 7, 9, 3, 1])); // 12
console.log(houseRobber([2, 7, 9, 8, 1])); // 15
