function solution(array, n) {
    let arr = [123];
    array.map((e)=> {
        if (Math.abs(e - n) === Math.abs(arr[0]-n)) {
            arr.unshift(e);
        } else if (Math.abs(e - n) <= Math.abs(arr[0]-n)) {
            arr = [e]
        }
    })
    arr.sort((a, b) => a - b);
    return arr[0];
}