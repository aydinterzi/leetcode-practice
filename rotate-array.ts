function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const splicedNums = nums.splice(-1, 1);
    nums.splice(0, 0, ...splicedNums);
  }
}

// function rotate(nums: number[], k: number): void {
//     if (k === nums.length) return

//     if (k > nums.length) k = Math.floor(k % nums.length)

//     const rightNums = nums.slice(nums.length - k)

//     for (let i = nums.length - 1; i >= 0; i--) {
//         let j = i - k

//         if (j < 0) {
//             nums[i] = rightNums[k + j]
//         }
//         else {
//             nums[i] = nums[j]
//         }
//     }
// };
