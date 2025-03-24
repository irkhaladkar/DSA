
/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const houseCost = new Map();
    return robCost(0, nums, houseCost);
};

function robCost(currentIndex, nums, houseCost) {
    if(currentIndex >= nums.length)
        return 0;
    if(houseCost?.has(currentIndex))
        return houseCost.get(currentIndex);
    const includeHouse = nums[currentIndex]+ robCost(currentIndex + 2, nums, houseCost);
    const dontInclude = robCost(currentIndex + 1, nums, houseCost);
    const res = Math.max(includeHouse, dontInclude)
    houseCost.set(currentIndex, res);
    return res;
}