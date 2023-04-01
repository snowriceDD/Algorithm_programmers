function solution(score) {
    let ans = [];
    let ans2 = [];
    score.map((e) => {
        ans.push((e[0]+e[1])/2);
    })
    let sortAns = [...ans].sort((a,b)=> b-a);
    ans.map((e) => {
        ans2.push(sortAns.indexOf(e) + 1)
    })
    return ans2
}