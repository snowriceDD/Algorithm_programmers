function solution(num, k) {
    let a = String(num).split('').indexOf(String(k));
    a === -1 ? null : a+=1;
    return a;
}