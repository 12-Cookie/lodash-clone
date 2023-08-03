function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    throw new Error("배열을 입력하세요!");
  }

  if (!Number.isInteger(size) || size <= 0) {
    throw new Error("1 이상의 정수를 입력하세요");
  }

  const result = [];
  const copy = [...arr]; // [1, 2, 3, 4, 5]

  while (copy.length > 0) {
    result.push(copy.splice(0, size));
  }

  return result;
}

export default chunk;
