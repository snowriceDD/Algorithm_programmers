function solution(my_string, num1, num2) {
    let my = [...my_string]
    let A = my_string.split("");
        A.splice(num1, 1, my[num2]);
        A.splice(num2, 1, my[num1]);
    // A.splice(num2, 1, A[num1]);
    return A.join('')
    
}