function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}
