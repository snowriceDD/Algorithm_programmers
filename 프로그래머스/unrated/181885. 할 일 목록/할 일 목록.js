function solution(todo_list, finished) {
    let res = [];
    for (let i = 0; i < finished.length; i+=1) {
        if (!finished[i]) {res.push(todo_list[i])}
    }
    return res
}