var RandomizedSet = function() {
  this.storage = {};
  this.indexMap = {};
  this.count = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.indexMap[val]) {
    return false;
  } else {
    this.count++
    this.indexMap[val] = this.count;
    this.storage[this.count] = val;
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.indexMap[val]) {
    delete this.storage[this.indexMap[val]]
    delete this.indexMap[val];
    this.count--
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let random = Math.floor(Math.random() * this.count);
  console.log('random index', random)
  //return this.storage[random]
};

let obj = new RandomizedSet;

// for (let i = 0; i < 10; i++) {
//   obj.insert(i);
// }

console.log(obj.insert(1));
console.log(obj.remove(2));
console.log(obj.insert(2));
console.log('rand', obj.getRandom());
console.log(obj.remove(1));
console.log(obj.insert(2));
console.log('rand', obj.getRandom());



console.log(obj.storage)



