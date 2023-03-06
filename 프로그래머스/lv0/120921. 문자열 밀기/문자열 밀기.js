function solution(A, B) {
    let i = 0;
    A = A.split('')
    while (true) {
        if (i === B.length) {
            return -1;
        }
        if (A.join('') === B) {return i}
        A.unshift(A.pop())
        i+=1;
    }
    
    
}