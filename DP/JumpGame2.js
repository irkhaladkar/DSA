/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    return countJumps(nums, 0);
};
function countJumps(nums, cIndex) {
    if(cIndex >= nums.length - 1) 
        return 0;
    const noOfJumps = nums[cIndex];
    let cnt = Infinity;
    for(let i=1;i<=noOfJumps;i++) {
       const tempRes = 1+ countJumps(nums, cIndex + i);
        cnt = Math.min(cnt, tempRes);
    }
    return cnt;
}