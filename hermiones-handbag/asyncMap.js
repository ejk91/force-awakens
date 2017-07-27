'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


var asyncMap = function(tasks, callback) {
  // I: array of async functions, and callback functiom
  // O: array - results of our callback function - results in order
  // C: must maintain order
  // E: none

  //declare results array
  // iterate through tasks
    // invoke task with custom cb
      // store result of cb at correct spot in results array
      // increment resultsCount
      // if resultsCount matches number of tasks
        // call callback on resultsArray

  let results = [];
  let counter = 0;

  tasks.forEach((task, index) => {
    task((data) => {
      results[index] = data;
      if (++counter === tasks.length) {
        callback(results);
      }
    })
  })
  
// DONE WITH PROMISES

// Promise.all(tasks.map((task) => new Promise(task)))
//   .then((value) => {
//     callback(value)
//   })
};



asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });














