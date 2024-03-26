function maxProfit2(prices: number[]): number {
  let pro: number = 0;
  let l: number = 0,
    r: number = 1;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      pro += prices[r] - prices[l];
      l++;
    } else {
      l = r;
    }
    r++;
  }
  return pro;
}
