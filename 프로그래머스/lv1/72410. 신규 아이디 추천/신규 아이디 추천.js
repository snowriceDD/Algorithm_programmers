function solution(new_id) {
    //복사 배열화
    let id = [...new_id] ;
    
    //다 소문자로 변경
    let Low = id.map((e) => e.toLowerCase());
    
    //조건 필터링
    let filt = Low.filter((e) => e == '-' || e =='_' || e =='.' || e =='1' || e == '2' || e == '3' || e == '4' || e == '5' || e == '6' || e == '7' 
                         || e == '8' || e == '9' || e == '0' || e == 'a' || e == 'b' || e == 'c' || e == 'd' || e == 'e' || e == 'f' || e == 'g' 
                         || e == 'h' || e == 'i' || e == 'j' || e == 'k' || e == 'l' || e == 'm' || e == 'n' || e == 'o' || e == 'p' || e == 'q' 
                         || e == 'r' || e == 's' || e == 't' || e == 'u' || e == 'v' || e == 'w' || e == 'x' || e == 'y' || e == 'z' )
    
    //연속된 마침표는 마침표 한개 처리
    for (let i = 0; i < filt.length; i++) {
        if (filt[i] === '.') {
        if (filt[i] === filt[i+1]) {
            filt.splice(i+1, 1);
            i--;
        }
        }
    }
    
    //마침표가 처음이나 끝이면 제거
    if (filt[0] === '.') {
        filt.shift();
    } 
    if (filt[filt.length-1] === '.') {
        filt.pop();
    }
    
    //빈 문자열이면 a를 넣어줌
    if (filt[0] === undefined) {
        filt.push('a');
    }
    
    //길이가 16자 이상이면, 인덱스 15까지만 표현
    if (filt.length >= 16) {
        filt = filt.slice(0, 15);
    }
    
    //제거 후, 마침표가 마지막에 있으면 마침표 제거
    if (filt[filt.length-1] === '.') {
        filt.pop();
    }
    
    //length < 3 -> length-1
    if (filt.length < 3) {
        filt.push(filt[filt.length-1])
        filt.push(filt[filt.length-1])
        filt = filt.slice(0, 3);
    }

    return filt.join('');
}
