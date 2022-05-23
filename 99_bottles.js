function bottleSong(num) {  // Function has a parameter for a number
  let i = num;  // set the variable 'i' to the value of the passed parameter
  let x = 'bottles';    // initialize variable x as 'bottles'
  let y = 'bottle';     // initialize variable y as 'bottle'

  while(i>0) {  // while loops while 'i' is greater than 0
      if(i !== 1) { // if 'i' does not equal 1...
          console.log(i, x, 'of beer on the wall,', i, x, 'of beer.');  // print these lines making sure to use the value of 'x' which is bottles (plural)
          if((i-1) !== 1){  // if 'i-1' does not equal 1...
            console.log('take one down and pass it around,', i-1, x, 'of beer on the wall.');   // print these lines making sure to use the value of 'x' which is bottles (plural)
          } else {  // if 'i-1' does equal 1...
            console.log('take one down and pass it around,', i-1, y, 'of beer on the wall.');   // print these lines making sure to use the value of 'y' which is bottle (singular)

          }
      } else {  // if 'i' does equal 1...
          console.log(i, y, 'of beer on the wall,', i, y, 'of beer.');  // print these lines making sure to use the value of 'y' which is bottle (singular)
          console.log('Take one down and pass it around, no more bottles of beer on the wall.');
          console.log('No more bottles of beer on the wall, no more bottles of beer.');
          console.log('Go to the store and buy some more,', num, 'bottles of beer on the wall.');
      }
      i--;  // decrement 'i' for the next loop
  }
};

bottleSong(99);