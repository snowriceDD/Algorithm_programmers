function solution(numbers) {
    let result = [];
    let a = numbers.split("");
    
    for (let i = 0; i < a.length; i+=1) {
        if (a[i] === 'z') {
            result.push('0');
            i+=3;
        } else if (a[i] === 'o') {
            result.push('1')
            i+=2;
        } else if (a[i] === 't') {
            if (a[i+1] === 'w') {
            result.push('2')
            i+=2;
            } else if (a[i+1] === 'h') {
            result.push('3')
            i+=4;    
            }
        } else if (a[i] === 'f') {
            if (a[i+1] === 'o') {
            result.push('4')
            i+=3;
            } else if (a[i+1] === 'i') {
            result.push('5')
            i+=3;    
            }
        } else if (a[i] === 's') {
            if (a[i+1] === 'i') {
            result.push('6')
            i+=2;
            } else if (a[i+1] === 'e') {
            result.push('7')
            i+=4;    
            }
        } else if (a[i] === 'e') {
            result.push('8')
            i+=4;
        }  else if (a[i] === 'n') {
            result.push('9')
            i+=3;
        } 
    }
    return parseInt(result.join(''));
}