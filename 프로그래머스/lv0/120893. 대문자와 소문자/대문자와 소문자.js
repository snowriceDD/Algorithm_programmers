function solution(my_string) {
    const msArr = [...my_string]
    const result = [];
    
    for(let i = 0; i < msArr.length; i++) {
        if (msArr[i] === msArr[i].toUpperCase()) {
            result.push(msArr[i].toLowerCase());        
        } else {
            result.push(msArr[i].toUpperCase());
        }
    }
    return (result.join(''));
}