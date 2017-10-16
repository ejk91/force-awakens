const removeDuplicates = (array) => { //[1, 2]
  
  let current = array[0]; // 1 -> 2
  let index = 1;

  for (let i = 1; i < array.length; i++) {
    // if (current === array[i]) {
    //   // array.splice(i, 1); //(1, 3)
    //   deleteCount++;
    //   i--;
    // } else {
    //   current = array[i];
    //   array.splice(startIndex + 1, deleteCount);
    //   startIndex = i;
    // }
    
    if ( current !== array[i]) { // i = 4 - 2
      array[index] = array[i];
      current = array[i];
      index++;
    } 
  }
  
  array.splice(index);
  
  return array
  
  
}

console.log(removeDuplicates([1,1, 1, 1 ,2, 2 , 3, 4 , 5, 5]));
