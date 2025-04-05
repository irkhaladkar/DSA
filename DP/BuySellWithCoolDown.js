/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
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
        const sell = prices[cIndex] + maximumProfit(prices, cIndex + 2, 1, map);
        map.set(mapKey, Math.max(idle, sell));
        return map.get(mapKey);
    }
}