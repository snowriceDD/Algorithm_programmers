const solution = arr => {
    let ans = [];
    for (let i of arr) {
        for (let j = 1; j <= i; j+=1) {
            ans.push(i)
        }
    }
    return ans
}