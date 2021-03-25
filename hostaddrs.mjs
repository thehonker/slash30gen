'use strict';

// subnet without hostaddr
// assumed to be a /24
const subnet = '10.15.18.'

for (let i = 1; i < 255; i = i) {
  // print the first 
  console.log(`${subnet}${i}`);
   
  // add 1
  i = i + 1;

  // print the second
  console.log(`${subnet}${i}`);
  
  // skip two
  i = i + 2

  // iterate to next
  i = i + 1;
};
