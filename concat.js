function concat(baseArray, ...values) {
  const concatenatedArray = [...baseArray];

  values.forEach((item) => {
    if (Array.isArray(item)) {
      concatenatedArray.push(...item);
    } else {
      concatenatedArray.push(item);
    }
  });

  return concatenatedArray;
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
