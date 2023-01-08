function solution(s){
    let checker = 0;
    var answer = true;
    let sS = s.split('');
    if (sS[0] === ')') {
        return false;
    }
    sS.map((e) => {
        if (e === '(') {
            checker += 1;
        } else if (checker === 0) {
            return false;
        } else {
            checker -= 1;
        }
    })
    checker === 0 ? answer = true : answer = false;
    return answer;
}