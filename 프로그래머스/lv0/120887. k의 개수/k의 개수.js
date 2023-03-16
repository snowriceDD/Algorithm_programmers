function solution(i, j, k) {
    let answer = 0;
    while (true) {
        String(i).split('').map((e) => e === String(k) ? answer+=1 : null)
        if (i === j) {break}
        i+=1;
    }
    return answer;
}