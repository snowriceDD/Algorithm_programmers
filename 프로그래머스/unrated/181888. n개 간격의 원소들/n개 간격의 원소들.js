const solution = (nl, n) => {
    let ans = [];
    nl.map((v, i) => i === 0 || i % n === 0 ? ans.push(v) : null)
    return ans
}