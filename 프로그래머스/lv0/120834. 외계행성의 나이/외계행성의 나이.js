function solution(age) {
    let arr = String(age).split('');
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let res = [];
    arr.map((e) => {
        res.push(alpha[Number(e)]);
    })
    return res.join('')
}