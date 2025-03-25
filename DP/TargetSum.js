/*
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

 

Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const map = new Map();
    return findWays(0, nums, target, map);
};
function findWays(index, nums, target, map) {
    if(target === 0 && index === nums.length)
        return 1;
    if(target !=0 && index === nums.length)
        return 0;
    const uniqueKey = `${index}-${target}`;
    if(map.has(uniqueKey))
        return map.get(uniqueKey);
    const positive = findWays(index+1, nums, target-nums[index], map);
    const negative = findWays(index+1, nums, target+nums[index], map);
    const res = positive + negative;
    map.set(uniqueKey, res);
    return res;
}