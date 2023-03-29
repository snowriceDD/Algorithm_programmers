function solution(n) {
    let iNum = [1];
    for (let i = 1; i <= 12; i+=1) {
        let a = iNum.reduce((a,c) => a *= c);
        if (a > n) {
            return i-2;
        } else {
            iNum.push(i);
        }
    }
}