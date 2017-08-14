const printSpiral = () => {


  var starLine = [];
  var spaceLine = [];
  for (var i = 0; i < 33; i++) {
      starLine.push('*');
      spaceLine.push(' ');
  }

const recurse = (i,size, starLine, spaceLine) => {
    if (i < Math.floor(size/2)) {
        starLine[i] = ' ';
        starLine[size-i] = ' ';
        spaceLine[(i-1)] = '*';
        spaceLine[size-(i-1)] = '*';

        console.log(spaceLine.join(' '));
        console.log(starLine.join(' '));

        i = i + 2;
        i = recurse(i, size, starLine, spaceLine);

        spaceLine[i] = '*';
        spaceLine[size-(i-2)] = '*';
        starLine[i-1] = ' ';
        starLine[size-(i-3)] = ' ';

        console.log(spaceLine.join(' '));
        console.log(starLine.join(' '));
        return i - 2;
    } else {
        spaceLine[16] = '*';
       return i;
    }
}

console.log(starLine.join(' '));
printSpiral(1, 32, starLine, spaceLine);

console.log('hello')