const solution = n => {
    let res = [];
    n.map((v, i) => i%5 === 0 ? res.push(v) : null)
    return res
}