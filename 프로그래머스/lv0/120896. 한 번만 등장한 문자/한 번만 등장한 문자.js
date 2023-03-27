function solution(s) {
    let ans = [];
    let a = s.split('').sort();
    a.map((e) => {
        let i = 0;
        a.map((d) => {
            e === d ? i +=1 : null
        })
        i === 1 ? ans.push(e) : null
    })
    return ans.join('');
}