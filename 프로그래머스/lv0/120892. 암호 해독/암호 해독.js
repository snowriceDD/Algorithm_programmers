function solution(cipher, code) {
    const a = [...cipher];
    const result =[];
    for (let j=1; j*code <= a.length; j++) {
        for (let i=0; i< a.length; i++){
            if (i+1 === code*j) {
                result.push(a[i]);
            }
        }
    }
    return result.join('');
}