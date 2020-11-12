let chessBoard: string = "", change: boolean = true

for(let i: number = 1; i <= 64; i++){
    if(change) {
        chessBoard += " "
        change = false
    }else{
        chessBoard += "#"
        change = true
    }

    if(i % 8 === 0) {
        chessBoard += "\n"
        if(change) change = false
        else change = true
    }
}

console.log(chessBoard)