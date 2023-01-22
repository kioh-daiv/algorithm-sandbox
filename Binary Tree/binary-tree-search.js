var binaryTreeSearch = function (nums, target) {
  if (nums.length % 2 == 0) {
    nums.push(null);
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = (start + end) / 2;
    if (target === nums[mid]) return [nums[mid], start];
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return undefined;
};

console.log(binaryTreeSearch([1, 3, 7, 13, 17, 21, 74], 17));
console.log(binaryTreeSearch([1, 3, 7, 13, 17, 21], 17));
console.log(binaryTreeSearch([17], 17));
console.log(binaryTreeSearch([7], 17));
