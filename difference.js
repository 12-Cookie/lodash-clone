function difference(array, values) {
    const newArray = array.filter((item) => !values.includes(item));
    return newArray;
}
