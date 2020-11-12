// First part

for(let i: number = 0; i < 100; i++){
    if(i % 3 === 0) console.log("Fizz")
    else if((i % 5 === 0) && (i % 3 !== 0)) console.log("Buzz")
    else console.log(i)
}

// Second part

console.log("-------------")

let double: string = ""
for(let i: number = 0; i < 100; i++){
    if(i % 3 === 0){
        double += "Fizz"
        if(i % 5 === 0){
            console.log(double += ", FizzBuzz")
        }else console.log(double)
    }else if((i % 5 === 0)){
        double += "Buzz"
        if(i % 3 === 0){
            console.log(double += ", FizzBuzz")
        }else console.log(double)
    }
    else console.log(i)
    double = ""
}