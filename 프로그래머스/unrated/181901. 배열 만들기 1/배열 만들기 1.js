const solution = (n, k) => {
    let arr = [];
    for (let i = 1; i <= n/k; i+=1) {
        arr.push(k*i)
    }
    return arr
}