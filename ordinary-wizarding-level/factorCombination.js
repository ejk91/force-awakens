const factorCombination = (target) => {
  const results = [];


  const recurse = (results, currentResult, target, start) => {
    if(target <= 1) {
      if (currentResult.length > 1) {
        results.push(currentResult);
      }
      return
    }

    for(let i = start; i <= target; ++i) {
      if (target % i === 0) {
        recurse(results, currentResult.concat([i]), target/i, i);
      }
    }
  }

  recurse(results, [], target, 2)


  return results;
}


// console.log(factorCombination(8))
// console.log(factorCombination(1))
console.log(factorCombination(12))
console.log(factorCombination(32))