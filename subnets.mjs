'use strict';

// subnet without hostaddr
// assumed to be a /24
const subnet = '10.15.16.'

for (let i = 0; i < 255; i = i) {
  // print the subnet 
  console.log(`${subnet}${i}`);
  
  // skip four
  i = i + 4
};
