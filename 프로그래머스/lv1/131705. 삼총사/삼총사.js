function solution(number) {
    let result = 0;
    
    for (let i=0; i < number.length-2; i++) {
        for (let j=1; j<number.length-1; j++) {
            for (let k=2; k<number.length; k++) {
                if (i < j && j < k) {
                    if (number[i] + number[j] + number[k] === 0) {
                        result++;
                    }
                }
                
            }
        }
    }
    return result;
}
/**
학생 각자 정수 번호
3명의 정수 번호를 더했을 때 0이 되면 삼총사
대충 for 두번 각

*/