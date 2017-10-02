// with regex

function lookandsay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1){return seq.length.toString() + p1})
}

// count - digit
const countAndSay = (n) => {
  if (n === 1) {
    return '1'
  }

  if (n === 2) {
    return '11'
  }

  let prev = '11'; //keep track of previous term


  for(let i = 3; i <= n; i++) {
    //add dummy character to keep going - one extra iteration

    prev += 'X';

    let count = 1;
    let temp = ''

    // create the next interations by reading the previous string

    for(let i = 1; i < prev.length; i++) {

      // if they dont match
      if (prev[i] !== prev[i-1]) {
        // add count
        temp += count.toString();
        // add digit
        temp += prev[i-1]

        //reset count
        count = 1;
      } else {
        // if they are equal - increment count
        count++;
      }

    }
    // update previous string
    prev = temp;
  }

  return prev;
}


console.log(countAndSay(5))




