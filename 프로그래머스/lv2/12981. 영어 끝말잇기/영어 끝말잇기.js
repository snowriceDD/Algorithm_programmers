function solution(n, words) {
    let compareArr = [];
    let wordPaste = [...words];
    let order = 2;
    let stage = 1;
    
    compareArr.push(wordPaste[0]);
    wordPaste.shift();
    // console.log(words[0][words[0].length-1])
    for (let word of wordPaste) {
        console.log(compareArr, word, order, stage)
        

        if (order === n+1) {
            order = 1;
            stage += 1;
        }
        
        
        if (compareArr.find((e) => e === word) !== undefined) {
            console.log("중복단어");
            break;
        }
        
        if (compareArr[compareArr.length-1][compareArr[compareArr.length-1].length-1] === word[0]) {
            compareArr.push(word);
            console.log("정상");
        } else {
            console.log("비정상");
            break;
        }
        order += 1;
        
        if (words[words.length-1] === word) {
            console.log("순회 완료");
            order = 0;
            stage = 0;
        }

        
    }
    
    
    return [order, stage];
}

/**
n명
12345...n12345...
words[0][words[0].length-1]

1. 전 순서 마지막 글자 === 후 순서 첫번째 글자
2. 이전 사용한 단어 중복검사



*/