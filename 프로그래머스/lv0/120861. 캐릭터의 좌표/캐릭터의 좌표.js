function solution(keyinput, board) {
    let x = 0;
    let y = 0;

    keyinput.map((e) => {
        
        if ((e === "left") && (x > Math.ceil(board[0]/2*-1))) {
            x -= 1;
        } else if ((e === "right") && (x < Math.floor(board[0]/2))) {
            x += 1;
        } else if ((e === "up") && (y < Math.floor(board[1]/2))) {
            y += 1;
        } else if ((e === "down") && (y > Math.ceil(board[1]/2*-1))) {
            y -= 1;
        }
    })    
    return [x, y];
}