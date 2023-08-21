function dropRight(arr, n = 1) {
    if (!Array.isArray(arr)) {
        throw new Error('배열을 입력하세요!');
    }

    if (arr.length === 0) {
        return [];
    }
    if (n <= 0) {
        return arr;
    }

    const result = [];

    for (let i = 0; i < arr.length - n; i++) {
        result.push(arr[i]);
    }

    return result;
}
//console.log(dropRight([1, 2, 3], 2));

export default dropRight;
