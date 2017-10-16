var combinationSum = function(candidates, target) {
    const combos = [];
    const memo = {};
    
    const addNums = (currentSum, possibleNums, comboSoFar, startIndex) => {
        if (currentSum > target) {
            return;
        }
        
        if (currentSum === target) {
            comboSoFar = comboSoFar.sort();
            if (!memo[comboSoFar]) {
                combos.push(comboSoFar);
                memo[comboSoFar] = true;
            } else {
                return;
            }
        }
        
        for (let i = startIndex; i < possibleNums.length; i++) {
            const newSum = currentSum + possibleNums[i];
            addNums(newSum, possibleNums, comboSoFar.concat([possibleNums[i]]), i);
        }
    }
    
    addNums(0, candidates, [], 0);
    
    return combos;
};