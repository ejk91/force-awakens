// write memoize from scratch

let memoize = (func) => {
  let cache = {};
  return (...args) => {
    let key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    } else {
      let result = func(...args)
      cache[key] = result;
      return result
    }
  }
}

let factorial = memoize( (num) => {
  console.log('working for factorial(' + num + ')');
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
});

console.log(factorial(3));