/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

var nthFibonacci = function (n) {
  // TODO: implement me!
  // starting number is 0
  // create number containor array
  var numbers = [0,1];
  // current number to add to accumlator is 1 and increase as we continue to reach n
    // use a loop to iterate and add to the array
      //add the sum of the previous two numbers
  if (n === 0) {
    return 0;
  }
  for(var i = 1; i < n; i++) {
    if ( i === 1) {
      numbers.push(i);
    } else {
      //debugger;
      //console.log(numbers);
      //console.log((numbers[i] + numbers[i -1]));
      numbers.push((numbers[(i)] + numbers[(i -1)]));
    }
  }
  
  // once nth number is reacher - return the last element of the array. - return array.pop()
  return numbers.pop();

};

var nFib = function(n) { // recursion
    return n < 2?
  n: nfib(n-1) + nfib(n-2);
}

var nFib = function(n){ //using memoize
  mem = []
for (var i =; i <=n ; i++) {
  mem[i] = i < 2 ? i : mem[i-1] + mem[i-2]; //-this would be alook up and not calculation
}
return mem[n];
}

// we can use memoize!
var nFib = function(n){ //using memoize
  if(nFib.mem = [n]) {return nFib.mem[n]}
for (var i =; i <=n ; i++) {
  nFib.mem[i] = i < 2 ? i : mFib.mem[i-1] + nFib.mem[i-2]; //-this would be alook up and not calculation
}
return mem[n];
}

//constant time
var mem = [0,1]
for( ; n > 1; n--) {
  mem.push(mem.shift() + mem[0])
}
return mem[n];


