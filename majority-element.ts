function majorityElement(nums: number[]): number {
  let obj = {};
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!Object.keys(obj).includes(nums[i].toString())) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
      if (obj[nums[i]] > max) {
        max = obj[nums[i]];
      }
    }
  }
}
