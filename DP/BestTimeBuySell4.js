/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 */

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const map = new Map();
    return maximumProfit(prices, 0, 1, k, map);
};
function maximumProfit(prices, cIndex, canBuyStock, transactionComplete, map) {
    if(cIndex >= prices.length || transactionComplete == 0)
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
        const sell = prices[cIndex] + maximumProfit(prices, cIndex + 1, 1, transactionComplete - 1, map);
        map.set(mapKey, Math.max(idle, sell));
        return map.get(mapKey);
    }
}