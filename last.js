function last(array) {
    if (!Array.isArray(array)) {
        throw new Error('배열 정보를 입력하세요!');
    }

    if (array.length === 0) {
        return undefined;
    } else {
        return array[array.length - 1];
    }
}
