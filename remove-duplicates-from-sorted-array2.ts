function removeDuplicates2(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let index = 1;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[index] || nums[i] !== nums[index - 1]) {
      index++;
      nums[index] = nums[i];
    }
  }

  return index + 1;
}
