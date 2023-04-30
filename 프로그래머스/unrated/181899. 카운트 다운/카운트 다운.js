const solution = (s, e) => {
    let ans = [];
    while (true) {
        ans.push(s)
        s-=1;
        if (s < e) { break }
    }
    return ans
}