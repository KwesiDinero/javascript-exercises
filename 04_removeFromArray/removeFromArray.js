let arr, value, optional;
const removeFromArray = function(arr, value, ...optional) {
  optional.forEach(val => {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === val) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
  });
  
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
