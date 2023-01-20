/**
 *
 *
 * @param {*} nums
 */
var bubbleSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let base = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let target = nums[j];
      if (base > target) {
        nums[i] = target;
        nums[j] = base;
        base = nums[i];
        target = nums[j];
      }
    }
  }
  return nums;
};

console.log(bubbleSort([4, 2, 5, 6, 1, 3, 7, 8, 9, 0]));
