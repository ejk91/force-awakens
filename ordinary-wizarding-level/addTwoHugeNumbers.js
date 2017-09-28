// You're given 2 huge integers represented by linked lists. 
// Each linked list element is a number from 0 to 9999 that 
// represents a number with exactly 4 digits. The represented
// number might have leading zeros. Your task is to add up these 
// huge integers and return the result in the same format.

// Example

// For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
// addTwoHugeNumbers(a, b) = [9876, 5434, 0].

// Explanation: 987654321999 + 18001 = 987654340000.

// For a = [123, 4, 5] and b = [100, 100, 100], the output should be
// addTwoHugeNumbers(a, b) = [223, 104, 105].

// Explanation: 12300040005 + 10001000100 = 22301040105.

const addTwoHugeNumbers = (a, b) => {
  // a.value = 9876
  // a.next = 5432
  
  let aNumber = []; //'0123' '0004' '0005' 
  let bNumber = []; // '0100' '0100' '0100'
  
  let aPointer = a;
  let bPointer = b
  
  while(aPointer.value) {
    let stringTemp = aPointer.value.toString() //'123' '4'
    if (stringTemp.length < 4) {
      let zeroesToAdd = 4 - stringTemp.length; // 1 3
      let temp = ''; // '0' '000'
      while (zeroesToAdd > 0) {
        temp = temp + '0';
        zeroesToAdd--;
      }
      
      aNumber.push(temp + stringTemp) //'0' + '123'
      
    } else {
      aNumber = aNumber.push(stringTemp);
    }
    aPointer = aPointer.next;
  }
  
  while(bPointer.value) {
    let stringTemp = bPointer.value.toString()
    if (stringTemp.length < 4) {
      let zeroesToAdd = 4 - stringTemp.length;
      let temp = '';
      while (zeroesToAdd > 0) {
        temp = temp + '0';
        zeroesToAdd--;
      }
      
      aNumber.push(temp + stringTemp)
      
    } else {
      aNumber = aNumber.push(stringTemp);
    }
    bPointer = bPointer.next;
  }
  
  aNumber = parseInt(aNumber.join('')) // '012300040005'
  bNumber = parseInt(bNumber.join('')) // '010001000100'
  
  let total = aNumber + bNumber; // '22301040105'
  let result;
  
  
  
  
  
  
  
  // iterate through each linkedList and create the number it is representing
    // first check if node.value has 4 digits
      // concat to result
    // else add necessary leading zeroes and concat result
  
  
  
  // Parse through our result to return the format wanted
}