/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(coins.length).fill(0).map(() => new Array(amount +1).fill(-1));
    const res = minNoOfCoins(coins, amount, 0, dp);
    return res=== Infinity ? -1 : res;
};
function minNoOfCoins(coins, amount, cIndex,dp) {
    if(amount === 0)
        return 0;
    if (amount < 0) return Infinity;
    if(cIndex === coins.length)
        return Infinity;
    if(dp[cIndex][amount] !== -1)
        return dp[cIndex][amount];
    let consider = Infinity;
    if(coins[cIndex] <= amount)
        consider = 1+ minNoOfCoins(coins,amount - coins[cIndex],cIndex, dp);
    const notConsider =  minNoOfCoins(coins,amount,cIndex + 1,dp);
    dp[cIndex][amount] = Math.min(consider, notConsider);
    return dp[cIndex][amount];
}