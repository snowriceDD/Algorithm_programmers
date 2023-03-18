function solution(quiz) {
    var answer = [];
    
    for (let i = 0; i < quiz.length; i+=1) {
        let qu = (quiz[i]).split(' ');
        
        if (qu[1] === '+') {
            if (Number(qu[0]) + Number(qu[2])  == qu[4]) {
                answer.push("O");
            } else {
                answer.push("X");
            }
        } else {
            if (Number(qu[0]) - Number(qu[2])  == qu[4]) {
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
    }
    return answer;
}