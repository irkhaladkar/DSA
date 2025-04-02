/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

 

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
 */


/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = Array.from({ length: coins.length + 1 }, () => new Array(amount + 1).fill(-1));
    return noofCombinations(amount, coins, 0, dp);
};
function noofCombinations(amount, coins, cIndex,dp) {
    if(amount === 0)
        return 1;
    if(cIndex === coins.length)
        return 0;
    if(dp[cIndex][amount] !== -1)
        return dp[cIndex][amount];
    let consider = 0;
    if(coins[cIndex] <= amount) 
        consider = noofCombinations(amount - coins[cIndex], coins, cIndex, dp);
    const notConsider = noofCombinations(amount, coins, cIndex + 1,dp);
    dp[cIndex][amount] = consider + notConsider;
    return dp[cIndex][amount];
}