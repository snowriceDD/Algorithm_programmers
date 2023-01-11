function solution(s) {
    let eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = [];
    let ssplit = [...s.split('')];

    ssplit.map((e, i, a) => {
        if ((num.find((d) => d == e)) == undefined) { //숫자가 아니면 실행
            if (e == 'o') { //on 검증
                if (ssplit[i+1] == 'n') {
                    result.push('1')
                }
            }
            if (e == 'z') { //ze 검증
                if (ssplit[i+1] == 'e') {
                    result.push('0')
                }
            }
            if (e == 't') { //tw, th 검증
                if (ssplit[i+1] == 'w') {
                    result.push('2');
                } else if (ssplit[i+1] == 'h') {
                    result.push('3');
                }
            }
            if (e == 'f') { //fo, fi 검증
                if (ssplit[i+1] == 'o') {
                    result.push('4');
                } else if (ssplit[i+1] == 'i') {
                    result.push('5');
                }
            }

            if (e == 's') { //si, se 검증
                if (ssplit[i+1] == 'i') {
                    result.push('6')
                } else if (ssplit[i+1] == 'e') {
                    result.push('7')
                }
            }
            if (e == 'e') { //ei 검증
                if (ssplit[i+1] == 'i') {
                    result.push('8')
                }
            }
            if (e == 'n') { //ni 검증
                if (ssplit[i+1] == 'i') {
                    result.push('9')
                }
            }

            
            
        } else {
            result.push(e);
        }
        
    })
    console.log(result)
    return parseInt(result.join(''));
}