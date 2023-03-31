function solution(array, n) {
    let arr = 0;

    const a = array.filter((item) => item == n);
    return a.length;
}