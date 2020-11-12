// First part

function countBs(phrase: string): number{
    let count: number = 0
    for(let i: number = 0; i < phrase.length; i++){
        if(phrase[i] === "B") count++
    }
    return count
}

console.log(countBs("BBC"))

// Second part

function countChar(phrase: string, letter: string): number{
    let count: number = 0
    for(let i: number = 0; i < phrase.length; i++){
        if(phrase[i] === letter) count++
    }
    return count
}

console.log(countChar("kakkerlak", "k"))