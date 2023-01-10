function solution(k, tangerine) {
    var answer = 0;
    let arr = [];
    let kk = k;
    let tang = tangerine.sort((a, b) => a - b);
    let j = 0;
    let arr2 = [];
    let arr3 = [];
    while (j !== tangerine.length) {
        arr2.length == '0' ? arr2.push(tang[j]) : null;
        if (tang[j] == tang[j+1]) { 
            arr2.push(tang[j+1]);
        } else {
            arr.push(arr2);
            arr2 = []; 
        }
    j+=1;
    }
    
    for (let i = 0; i < arr.length; i++) {
        arr3.push(arr[i].length);
    }
    arr3.sort((a, b) => b - a);
    let l = 0;
    while(kk > 0) {
        kk -= arr3[l];
        l += 1;
    }
    return l;
}

/**
k개 팔거고 그 사이즈 종류는 경우의 수 최소값 = answer

k < tang => 1

*/