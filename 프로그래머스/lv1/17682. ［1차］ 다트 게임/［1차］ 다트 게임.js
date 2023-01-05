function solution(dartResult) {

    let splitArr = dartResult.split('');
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let result = 0;
    let wait = 0;
    let third = 0;
    let arr = []
    
    let numFinder = (v) => v === splitArr[0]
       
    if (num.some(numFinder)) {
        arr.push(splitArr[0]);
        splitArr.shift();
        }
    if (splitArr[0] === '0') {
        arr = [10];
        splitArr.shift();    
    }
    
    if (splitArr[0] == 'S') {
        wait += arr[0]**1;
    } else if (splitArr[0] == 'D') {
        wait += arr[0]**2;
    } else if (splitArr[0] == 'T') {
        wait += arr[0]**3;
    }
    splitArr.shift();
    
    if (splitArr[0] == '*') {
        wait *= 2;
        splitArr.shift();
    } else if (splitArr[0] == '#') {
        wait *= -1;
        splitArr.shift();
    }
    
    arr=[];
    //1set 끝
    //2set 시작
    if (num.some(numFinder)) {
        arr.push(splitArr[0]);
        splitArr.shift();
    }
    if (splitArr[0] === '0') {
        arr = [10];
        splitArr.shift();    
    }
        
    if (splitArr[0] == 'S') {
        result += arr[0]**1;
    } else if (splitArr[0] == 'D') {
        result += arr[0]**2;
    } else if (splitArr[0] == 'T') {
        result += arr[0]**3;
    }
    splitArr.shift();
    
    if (splitArr[0] == '*') {
        wait *= 2;
        result *= 2;
        splitArr.shift();
    } else if (splitArr[0] == '#') {
        result *= -1;
        splitArr.shift();
    }
    arr = [];
    //2set 끝
    //3set 시작

    if (num.some(numFinder)) {
        arr.push(splitArr[0]);
        splitArr.shift();
    }

    if (splitArr[0] === '0') {
        arr = [10];
        splitArr.shift();    
    }

    if (splitArr[0] == 'S') {
        third += arr[0]**1;
    } else if (splitArr[0] == 'D') {
        third += arr[0]**2;
    } else if (splitArr[0] == 'T') {
        third += arr[0]**3;
    }
    splitArr.shift();
    
    if (splitArr[0] == '*') {
        result *= 2;
        third *= 2;
        splitArr.shift();
    } else if (splitArr[0] == '#') {
        third *= -1
        splitArr.shift();
    }

    console.log(wait, result, third)
    return wait + result + third
}