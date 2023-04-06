function solution(rsp) {
    const rspArr = [...rsp];
    const result = [];
    for (let i=0; i < rspArr.length; i++) {
        if (rsp[i] === "2") {
            result.push('0');
        } else if (rsp[i] === '5') {
            result.push('2');
        } else if (rsp[i] === '0') {
            result.push('5');
        }
    }
    return result.join('');
}