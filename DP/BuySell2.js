/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const map = new Map();
    return maximumProfit(prices, 0, 1, map);
};
function maximumProfit(prices, cIndex, canBuyStock, map) {
    if(cIndex >= prices.length)
        return 0;
    const mapKey = cIndex + ':' + canBuyStock;
    if(map.has(mapKey)) {
        return map.get(mapKey);
    }
    if(canBuyStock === 1) {
        const idle = maximumProfit(prices, cIndex + 1, canBuyStock, map);
        const buy = -prices[cIndex] + maximumProfit(prices, cIndex + 1, 0, map);
        map.set(mapKey, Math.max(idle, buy));
        return map.get(mapKey);
    } else {
        const idle = maximumProfit(prices, cIndex + 1, canBuyStock, map);
        const sell = prices[cIndex] + maximumProfit(prices, cIndex + 1, 1, map);
        map.set(mapKey, Math.max(idle, sell));
        return map.get(mapKey);
    }
}