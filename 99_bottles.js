function bottleSong(num) {
  let i = num;
  let x = 'bottles';
  let y = 'bottle';

  while(i>0) {
      if(i !== 1) {
          console.log(i, x, 'of beer on the wall,', i, x, 'of beer.');
          console.log('take one down and pass it around,', i-1, x, 'of beer on the wall.');
      } else {
          console.log(i, y, 'of beer on the wall,', i, y, 'of beer.');
          console.log('Take one down and pass it around, no more bottles of beer on the wall.');
          console.log('No more bottles of beer on the wall, no more bottles of beer.');
          console.log('Go to the store and buy some more,', num, 'bottles of beer on the wall.');
      }
      i--;
  }
};

bottleSong(99);