function solution(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        let arr = [];
        
        for (let j = 1; j <= i; j++) {
            if(i % j === 0) {
                arr.push(j);
            }
        }
        
        if (arr.length > 2) {
            result++;
        }
        arr = [];
    }
    return result;
}
