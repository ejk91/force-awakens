/*
MedianStream

Here is a more complicated, extensive coding challenge. You'll face many challenges of this stature during the interview process. At times you'll be given a problem where the time provided will not be sufficient to construct an ideal solution for, so what will you do? This problem may or may not provide you with the opportunity to experience this sort of interviewing situation. 

This one is heaps of fun...

Here's a resource which may help:
http://eloquentjavascript.net/1st_edition/appendix2.html

Given a stream of unordered integers, find the median of the stream any time we want it. 
We will be asked to find the median multiple times, so the peekMedian function should have optimal time complexity.

Note: The median is the middle number of a sorted set. , or the average of the two middle numbers in an even set (when the set is .

// [1, 4, 8]
// Median is 4 (middle number)

// [1, 3, 7, 8]
// Median is 5 (average of two middle numbers)


Using the MedianStream class: 
// var mStream = new MedianStream();
// mStream.insert(1);
// mStream.insert(3);
// mStream.insert(2);
// mStream.peekMedian(); 
// => 2
// mStream.insert(5);
// mStream.insert(4);
// mStream.peekMedian(); 
// => 3
*/

var MedianStream = function () {
  this.minHeap = new BinaryHeap(function (child, parent) {
    return child >= parent;
  });
  // lower half
  this.maxHeap = new BinaryHeap(function (child, parent) {
    return child <= parent;
  });
};

// everything in the maxHeap has to be less than or equal to minHeap
  // if we pop off the maxHeap it's greater than minHeap, then we
  // swap the two of them

MedianStream.prototype = {
  insert: function (elm) {
    if (this.size() % 2 === 0) {
      this.maxHeap.push(elm);
      // if there are no items in the minHeap
      if (!this.minHeap.content.length) {
        // end function
        return;
      }
      // if maxHeap root is greater than minHeap root, swap
      if (this.maxHeap.content[0] > this.minHeap.content[0]) {
        var toMax = this.minHeap.pop();
        var toMin = this.maxHeap.pop();
        this.minHeap.push(toMin);
        this.maxHeap.push(toMax);
      }
    } else {
      // if odd number of elements
      // first push onto maxHeap
      this.maxHeap.push(elm);
      // pop off the max of the maxHeap
      var toMin = this.maxHeap.pop();
      // push it onto the minHeap
      this.minHeap.push(toMin);

    }
  },
  peekMedian: function () {
    if (this.size() % 2 === 0) {
      return (this.minHeap.content[0] + this.maxHeap.content[0]) / 2.0;
    } else {
      return this.maxHeap.content[0];
    }
  },
  size: function () {
    return this.minHeap.size() + this.maxHeap.size();
  }
};

/////////////////////////////////////////////////////////////
// HELPERS!
/////////////////////////////////////////////////////////////
// Binary Heap
// Takes a compare function to define the child parent relationship
// NOTE: Should also probably take a scoring function for future
//       use cases
// NOTE: Could also be accomplished by using two minHeaps, by
//       multiplying the input by -1 when adding to the minHeap
/////////////////////////////////////////////////////////////

function BinaryHeap (compareFunction) {
  this.content = [];
  // compares if it is a min or max heap, basically swap when this function
  // returns true
  this.compareFunction = compareFunction;
}

BinaryHeap.prototype = {
  push: function (element) {
    this.content.push(element);
    this.bubbleUp(this.content.length - 1);
  },
  pop: function () {
    // take the top item
    var result = this.content[0];
    // pop the last elm
    var end = this.content.pop();
    // if items in array
    if (this.content.length > 0) {
      // move the popped item to the begining
      this.content[0] = end;
      // move it down into the array
      this.sinkDown(0);
    }
    // return result
    return result;
  },
  remove: function (node) {
    // to remove item, we must search the array for the item
    var length = this.content.length;
    for (var i = 0; i < length; i++) {
      if (this.content[i] !== node) {
        continue;
      }
      // once we find the node, we pop off the last elm in array
      var end = this.content.pop();
      // if we are already at the end, stop
      if (i === length - 1) {
        break;
      }
      // otherwise, overwrite this.content[i] with end
      this.content[i] = end;
      // then bubbleUp and sinkDown with it
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  },
  size: function () {
    return this.content.length;
  },
  bubbleUp: function (n) {
    var element = this.content[n];
    var parent;
    while (n > 0) {
      // get index of parent node
      var parentN = Math.floor((n + 1) / 2) - 1;
      parent = this.content[parentN];
      // if valid position found, break
      if (this.compareFunction(element, parent)) {
        break;
      }
      // otherwise, swap the current element with the parent
      // also swap the indexes
      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  },
  sinkDown: function (n) {
    var length = this.content.length;
    var element = this.content[n];
    while (true) {
      // get indexes of children
      var child2n = (n + 1) * 2, child1n = child2n - 1;
      // init swap in case we need to store the new position of the element
      var swap = null;
      // if child1n is in the array
      if (child1n < length) {
        // set child1 to the element at child1n
        var child1 = this.content[child1n];
        // if invalid position, meaning the child and it's parents conflict
        if (!this.compareFunction(child1, element)) {
          // set swap to index of child1
          swap = child1n;
        }
      }
      if (child2n < length) {
        var child2 = this.content[child2n];
        if (!this.compareFunction(child2, (swap === null ? element : child1))) {
          // swap index of child2
          swap = child2n;
        }
      }
      // if nothing got swapped, break
      if (swap === null) {
        break;
      }
      this.content[n] = this.content[swap];
      this.content[swap] = element;
      n = swap;
    }
  }
};