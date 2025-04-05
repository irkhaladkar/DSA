/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
 */
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const map = new Map();
    return maximumProfit(prices, 0, 1, map, fee);
};
function maximumProfit(prices, cIndex, canBuyStock, map, transactionFees) {
    if(cIndex >= prices.length)
        return 0;
    const mapKey = cIndex + ':' + canBuyStock;
    if(map.has(mapKey)) {
        return map.get(mapKey);
    }
    if(canBuyStock === 1) {
        const idle = maximumProfit(prices, cIndex + 1, canBuyStock, map, transactionFees);
        const buy = -prices[cIndex] + maximumProfit(prices, cIndex + 1, 0, map, transactionFees);
        map.set(mapKey, Math.max(idle, buy));
        return map.get(mapKey);
    } else {
        const idle = maximumProfit(prices, cIndex + 1, canBuyStock, map, transactionFees);
        const sell = -transactionFees + prices[cIndex] + maximumProfit(prices, cIndex + 1, 1, map, transactionFees);
        map.set(mapKey, Math.max(idle, sell));
        return map.get(mapKey);
    }
}