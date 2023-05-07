const solution = v => {
    let ans = [];
    v.split(' ').map((e) => e === '' ? null : ans.push(e))
    return ans;
}