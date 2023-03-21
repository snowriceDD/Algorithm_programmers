function solution(n) {
    let i = 2;
    let ans = [];
    let nn = n
    while(nn !== 1) {
        if (nn % i === 0) {
            (ans[ans.length-1] !== i) ? ans.push(i) : null
            nn = nn/i;
        } else {
            i +=1;
        }
    }
    return ans
}