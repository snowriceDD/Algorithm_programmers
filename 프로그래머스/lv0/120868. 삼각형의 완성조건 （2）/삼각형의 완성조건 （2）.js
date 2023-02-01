const solution = (sides) => {
    let answer = 0;
    for(let i = 1; i < sides[0] + sides[1]; i++) {
        let arr = [sides[0], sides[1], i].sort((a,b) => b - a);
        arr[0] < arr[1] + arr[2] ? answer += 1 : null;
    }
    return answer;
}