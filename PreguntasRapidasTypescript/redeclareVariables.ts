var i = 1

const printVar = () => console.log(i)

const redeclareAndPrint = () => {
    var i = 2
    printVar()
}

redeclareAndPrint()