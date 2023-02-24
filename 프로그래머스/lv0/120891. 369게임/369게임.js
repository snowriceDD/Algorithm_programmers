function solution(order) {
    let numList = String(order).split('');
    let answer = 0;
    numList.map((e) => {
        if (e === '3') {
            answer += 1;
        } else if (e === '6') {
            answer += 1;
        } else if (e === '9') {
            answer += 1;
        }
    });
    return answer;
}