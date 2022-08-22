const array = [1, 2, 3, 4, 5, 6];

const sum = function (array) {
  if (array.length === 1) {
    return array[0];
  } else {
    return array.pop() + sum(array);
  }
};

console.log(sum(array));


