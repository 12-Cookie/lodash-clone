function findIndex(array, predicate, fromIndex = 0) {
  // `array`는 검색할 배열
  // `predicate`는 배열의 요소를 인수로 받아 boolean 값을 반환하는 함수
  // `fromIndex`는 검색을 시작할 인덱스. 기본값 0

  if (typeof predicate === 'object') {
    // `predicate`가 객체라면, `Object.keys(predicate)` 함수를 사용하여 객체의 키를 가져옴
    // 그리고 `every()` 함수를 사용하여 모든 키에 대해 `predicate[key] === array[i][key]`를 검사
    // `every()` 함수는 모든 조건이 충족되면 `true`를 반환하고, 한 조건이라도 충족하지 않으면 `false`를 반환
    predicate = (o) =>
      Object.keys(predicate).every((key) => o[key] === predicate[key]);
  } else if (Array.isArray(predicate)) {
    // `predicate`가 배열이라면, `indexOf()` 함수를 사용하여 배열의 요소를 찾음
    // `indexOf()` 함수는 요소를 찾으면 요소의 인덱스를 반환하고, 찾지 못하면 -1을 반환
    predicate = (o) => predicate.indexOf(o[predicate[0]]) !== -1;
  } else if (typeof predicate !== 'function') {
    // `predicate`가 함수가 아니라면, `o[predicate]`를 사용하여 `predicate` 속성의 값을 가져옴
    predicate = (o) => o[predicate];
  }

  for (let i = fromIndex; i < array.length; i++) {
    // `array`의 요소를 순회
    // `predicate(array[i])`를 사용하여 요소가 `predicate` 함수의 조건을 만족하는지 확인
    // 조건을 만족하면 요소의 인덱스를 반환
    if (predicate(array[i])) {
      return i;
    }
  }
  // 조건을 만족하는 요소가 없으면 -1을 반환
  return -1;
}

const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

const index = findIndex(users, function (o) {
  return o.user == 'barney';
});
const index2 = findIndex(users, { user: 'fred', active: false }, 1);
const index3 = findIndex(users, ['active', false]);
const index4 = findIndex(users, (user) => user.active);

console.log(index); // 0
console.log(index2); // 1
console.log(index3); // 0
console.log(index4); // 2
