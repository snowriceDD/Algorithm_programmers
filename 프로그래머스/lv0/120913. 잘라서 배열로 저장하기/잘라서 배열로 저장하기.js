function solution(my_str, n) {
    let answer = [];
    let copy = my_str
    while(true) {
        if(copy.length < 1) {break}
        answer.push(copy.slice(0, n));
        copy = copy.slice(n);
    }
    return answer;
}