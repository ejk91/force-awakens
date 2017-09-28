//Brute force n2 - evaluate each pair

//problem with this is that we would see each pair twice

let getMaxProfit = (prices) => {
  let maxProfit = 0;

  // go through every time
  for(let outerTime = 0; outerTime < prices.length; outerTime++) {

    // for every time we go through every other time
    for (let innerTime = 0; innerTime < prices.length; innerTime++) {

      //find which is earlier
      let earlierTime = Math.min(outerTime, innerTime);
      let laterTime = Math.max(outerTime, innerTime);

      // find prices according to time
      let earlierPrice = prices[earlierTime]
      let laterPrice = prices[laterTime]


      // find potential profit by buying at minimal price and selling at current price
      let potentialProfit = laterPrice - earlierPrice;

      //update maxProfit
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }

  return maxProfit
}

// try to solve as we go, in linear time
// for each number we visit we want to keep track of the lowestPrice we have seen so far
// see if there is a better profit than before

//questions - do we want to return negative profit?
// return zero if there is no profit?

let getMaxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0]; // we must buy first before we sell

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];

    let potentialProfit = currentPrice - minPrice;

    //update max profit
    maxProfit = Math.max(potentialProfit, maxProfit);

    //update our minPrice
    minPrice = Math.min(minPrice, currentPrice);

  }

  return maxProfit


}