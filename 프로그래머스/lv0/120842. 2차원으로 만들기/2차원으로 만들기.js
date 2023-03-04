function solution(num_list, n) {
    var answer = [];
    while(true) {
        let arr = [];
        for (let i = 0; i < n; i+=1) {
            let pushItem = num_list.shift();
            arr.push(pushItem);
        }
        answer.push(arr);
        if(num_list[0] === undefined) {break}
    }
    return answer;
}