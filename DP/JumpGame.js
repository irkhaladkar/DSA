/**
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    return calculateJump(nums, 0);
};
function calculateJump(nums, cIndex) {
    if(cIndex >= nums.length -1)
        return true;
    const noOfJumps = nums[cIndex];
    let ans = false;
    for(let i=1;i<=noOfJumps;i++) {
        const tempAns = calculateJump(nums, cIndex + i);
        ans = ans || tempAns;
    }
    return ans;
}