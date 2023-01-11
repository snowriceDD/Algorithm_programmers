function solution(N, stages) {
    let result = [];
    let challenger = stages.length;
    stages.sort((a, b) => a - b);
    let res = [];
    
    for (let i = 1; i < N+1; i++) { //스테이지 포문
        let noClear = []
        for (let j = 0; j < stages.length; j++) { // 못 깬 사람 검출기
            if (stages[j] == i) {
                noClear.push(i);
            }  
        }
        res.push([i, noClear.length/challenger]);
        challenger -= noClear.length;
    }
    
    res.sort((a, b) => b[1] - a[1])
    for (let k = 0; k < res.length; k++) {
        result.push(res[k][0]);  
    }
    
    return result;
}

/**
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

전체 s = n
멈춘 s = stages[]
stages element = 1~n+1
n+1 = 완주자
실패율 == 작은 번호 우선


*/