function removeDuplicates(nums: number[]): number {
  let index = nums.length;
  while (index >= 0) {
    if (nums[index] === nums[index - 1]) {
      nums.splice(index - 1, 1);
      index--;
    } else {
      index--;
    }
  }
  return nums.length;
}
