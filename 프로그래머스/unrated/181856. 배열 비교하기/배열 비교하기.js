function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    } else {
        if (arr1.reduce((a, c) => a + c) === arr2.reduce((a, c) => a + c)) {
            return 0
        } else {
        return arr1.reduce((a, c) => a + c) > arr2.reduce((a, c) => a + c) ? 1 : -1;
        }
    } 
}