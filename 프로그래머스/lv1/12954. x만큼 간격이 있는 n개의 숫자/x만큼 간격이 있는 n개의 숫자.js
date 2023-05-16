function solution(x, n) {
    let res = [];
    for (let i = 1; i <= n; i+=1) {
        res.push(x * i)
    }
    return res
}