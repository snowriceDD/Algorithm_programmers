function solution(emergency) {
    let res = [];
    let copyER = [...emergency];
    let sortER = emergency.sort((a, b) => b - a);
    copyER.map((e) => {
        res.push(sortER.indexOf(e)+1);
    })
    return res
}