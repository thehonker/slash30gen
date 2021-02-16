'use strict';

// little thing to print port numbers like this
// 1 3 5 7
// 2 4 6 8

// yes i'm dumb enough that i need this


// stole these functions from
// https://wsvincent.com/javascript-print-odd-or-even-numbers/
function printOdd(num) {
  for (let i=1; i<num; i++) {
    if(i % 2 !== 0) {
      process.stdout.write(`${i} `.padStart(3));
    }
  }
}

function printEven(num) {
  for (let i=1; i<num; i++) {
    if(i % 2 === 0) {
      process.stdout.write(`${i} `.padStart(3));
    }
  }
}


console.log('Quanta Style:');
printEven(50);
console.log('');
printOdd(49);

console.log('');
console.log('');

console.log('Cisco Style:');
printOdd(49);
console.log('');
printEven(50);
