function solution(answers) {
    let one = [1, 2, 3, 4, 5]
    let two = [2, 1, 2, 3, 2, 4, 2, 5]
    let thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let ones = 0;
    let twos = 0;
    let thrs = 0;
    
    let res = [];
    
    answers.forEach((e, i) => {
        if (e === one[i%5]) {
            ones+=1;
        }
    })
    
    answers.forEach((e, i) => {
        if (e === two[i%8]) {
            twos+=1;
        }
    })
    
    answers.forEach((e, i) => {
        if (e === thr[i%10]) {
            thrs+=1;
        }
    })
    
    let group = [ones, twos, thrs];
    group.map((e, i) => {
        if (e === Math.max(...group)) {
            res.push(i+1)
        }
    })

    return res
}

