function solution(s) {
    let sSplit = s.split('');
    let checkerV = true;
    let arr = [];
    
    function checker(e) {
        if (e == ' ') {
            checkerV = true;
        } else {
            checkerV = false;
        }
    }
    
    sSplit.map((e) => {
        checkerV == true ? arr.push(e.toUpperCase()) : arr.push(e.toLowerCase())
        checker(e);
        
    })
    return arr.join('');
}