/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const map = new Map();
    return maximumProfit(prices, 0, 1, 0, map);
};
function maximumProfit(prices, cIndex, canBuyStock, transactionComplete, map) {
    if(cIndex >= prices.length || transactionComplete == 1)
        return 0;
    const mapKey = cIndex + ':' + canBuyStock + ':' + transactionComplete;
    if(map.has(mapKey)) {
        return map.get(mapKey);
    }
    if(canBuyStock === 1) {
        const idle = maximumProfit(prices, cIndex + 1, canBuyStock, transactionComplete, map);
        const buy = -prices[cIndex] + maximumProfit(prices, cIndex + 1, 0, transactionComplete, map);
        map.set(mapKey, Math.max(idle, buy));
        return map.get(mapKey);
    } else {
        const idle = maximumProfit(prices, cIndex + 1, canBuyStock, transactionComplete, map);
        const sell = prices[cIndex] + maximumProfit(prices, cIndex + 1, 1, transactionComplete + 1, map);
        map.set(mapKey, Math.max(idle, sell));
        return map.get(mapKey);
    }
}