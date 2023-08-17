function drop(arr, n = 1) {
  if (!Array.isArray(arr)) {
    throw new Error("배열을 입력하세요!");
  }

  if (n < 0) {
    return arr;
  }

  return arr.slice(n);
}

export default drop;
