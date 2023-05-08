function solution(my_string) {
    var answer = [];
    let mss = my_string.split('');
    
    for (let j = 0; j < mss.length; j+=1) {
        let ans = []
        for (let i = mss.length-1; i >= j; i-=1) {
            ans.push(mss[i])
        }
        answer.push(ans.reverse().join(''))
    }
    return answer.sort()
}