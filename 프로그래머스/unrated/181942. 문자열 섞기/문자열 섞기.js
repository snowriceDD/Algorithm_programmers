const solution = (str1, str2) => {
    let arr = [];
    let one = str1.split('');
    let two = str2.split('');
    
    for (let i = 0; i<one.length; i+=1) {
        arr.push(one[i], two[i]);
    }
    return arr.join('')
}