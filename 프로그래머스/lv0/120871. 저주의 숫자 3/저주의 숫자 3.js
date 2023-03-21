function solution(n) {
    let arr = [];
    let i = 1;
    while (true) {
        if (i % 3 === 0) {
            i+=1;
        } else if(String(i).split('').indexOf('3') !== -1) {
            i+=1;
        } else {
        arr.push(i);
        i+=1;
        }
        if(arr.length == 100) {break}
    }
    return arr[n-1];
}