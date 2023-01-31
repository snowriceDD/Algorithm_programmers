const solution = (s) => {
    let answer = 0;
    let stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        stack[stack.length-1] == s[i] ? stack.pop() : stack.push(s[i]);
    }
    stack.length == 0 ? answer += 1 : answer += 0;
    return answer;
}