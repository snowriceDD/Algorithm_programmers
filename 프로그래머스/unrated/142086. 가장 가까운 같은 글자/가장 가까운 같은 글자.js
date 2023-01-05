function solution(s) {
    let arr = [...s];
    let result = [-1];
    //[b, a, n, a, n, a];
    
    
    for (let i=1; i<arr.length; i++) {
        
        // console.log(arr[i])
        let find = arr.findIndex((e)=> e === arr[i]); //앞에서부터 인덱스 확인
        
        // console.log(arr[i], find, i, arr);
        if (i === find) {
            result.push(-1);
        } else if (i > find) {
            result.push(i-find);
            arr[find] = '*';
        }
    }
    
    return (result)
}

/**
s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 답
const find2 = arr.findIndex((element, index, arr) => element === 3);
banana
b 처음/앞에 같은 글자 x/ -1
a 처음/앞에 같은 글자 x/ -1
n 처음/앞에 같은 글자 x/ -1
a 나옴/두칸 앞에 같은 글자/ 2
n 나옴/두칸 앞에 같은 글자/ 2
a 나옴/두칸 네칸 앞에 같은 글자/가장 가까운 것은 두 칸 앞/ 2
indexOf+1
find
*/
