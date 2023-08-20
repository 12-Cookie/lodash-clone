function nth(arr, n = 0) {
    if (!Array.isArray(arr)) {
        throw new Error('배열을 입력하세요!');
    }
    // if (!Number.isInteger(n)) {
    //     return arr[0];
    // }
    // if (n >= 0) {
    //     return arr[n];
    // } else if (n < 0) {
    //     return arr[arr.length + n];
    // }
    return (
        Array.isArray(arr) &&
        (Number.isInteger(n) ? (n >= 0 ? arr[n] : arr[arr.length + n]) : arr[0])
    );
}

module.exports = nth;
