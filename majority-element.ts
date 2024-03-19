function majorityElement(nums: number[]): number {
  let obj = {};
  let max = 0;
  let maxIndex;
  if (nums.length < 2) {
    return nums[0];
  }
  for (let i = 0; i < nums.length; i++) {
    if (!Object.keys(obj).includes(nums[i].toString())) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
      if (max < obj[nums[i]]) {
        max = obj[nums[i]];
        maxIndex = nums[i];
      }
    }
  }
  return maxIndex;
}
