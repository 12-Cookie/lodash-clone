function difference(array, values) {
    if (!Array.isArray(array) || !Array.isArray(values)) {
        throw new Error('배열 정보를 입력하세요!');
    }

    const newArray = array.filter((item) => !values.includes(item));
    return newArray;
}
