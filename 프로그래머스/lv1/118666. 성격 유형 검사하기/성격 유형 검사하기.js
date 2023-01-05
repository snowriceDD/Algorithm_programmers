function solution(survey, choices) {
    let R = 0;
    let T = 0;
    
    let C = 0;
    let F = 0;
    
    let J = 0;
    let M = 0;
    
    let A = 0;
    let N = 0;
    
    let result = [];
    // 3 2 1 0 1 2 3
    // 1 2 3 4 5 6 7
        for(let i = 0; i < survey.length; i++) {
            if (choices[i] !== 4) { 
                if (survey[i] == "RT") {(choices[i] <= 4 ? R += Math.abs(choices[i]-4) : T += choices[i]-4)}
                if (survey[i] == "TR") {(choices[i] <= 4 ? T += Math.abs(choices[i]-4) : R += choices[i]-4)}
                if (survey[i] == "CF") {(choices[i] <= 4 ? C += Math.abs(choices[i]-4) : F += choices[i]-4)}
                if (survey[i] == "FC") {(choices[i] <= 4 ? F += Math.abs(choices[i]-4) : C += choices[i]-4)}
                if (survey[i] == "JM") {(choices[i] <= 4 ? J += Math.abs(choices[i]-4) : M += choices[i]-4)}
                if (survey[i] == "MJ") {(choices[i] <= 4 ? M += Math.abs(choices[i]-4) : J += choices[i]-4)}
                if (survey[i] == "AN") {(choices[i] <= 4 ? A += Math.abs(choices[i]-4) : N += choices[i]-4)}
                if (survey[i] == "NA") {(choices[i] <= 4 ? N += Math.abs(choices[i]-4) : A += choices[i]-4)}
            }

        }
            
    R >= T ? result.push('R') : result.push('T')
    C >= F ? result.push('C') : result.push('F')
    J >= M ? result.push('J') : result.push('M')
    A >= N ? result.push('A') : result.push('N')
    
    console.log(R, T, C, F, J, M, A, N);
    return result.join('');
}


/**
R & T
C & F
J & M
A & N
16 유형

7선택지

*/