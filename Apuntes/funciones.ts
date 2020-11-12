/*
Funcion flecha
const f = () => {return ...}
o de manera mas simple, cuando solo hay una linea en la funcion:
const f = (a,b) => a+b;
*/

/*
En typescript si tipas una funcion, el transpilador te obliga a tipar tambien los parametros de la funcion.
En caso de que se tipase una funcion con number por ejemplo y los parametros se tipan como any, el
transpilador dara un error antes de la ejecucion ya que al ser los parametros del tipo any no se puede
garantizar que el resultado de la funcion sea de tipo number.
*/

/*
Funciones que devuelven funciones: Cuando una funcion devuelve otra se llama closure, en este caso la 
funcion devuelta por otra funcion, se llevara los parametros de la segunda.
const multiplyBy = function(n: number) => {
    return (a: number) => n * a
}

const double = multilyBy(2) --> ahora double sera la funcion que devuelve la funcion multiplyBy
double(3) --> Devolvera 6
*/

// 1 ejercicio
const saluda = function (lenguaje: string) {
    return (persona: string): string => `${lenguaje} ${persona}`
}

const spanish = saluda("Adios")
console.log(spanish("Manuel"))

const italian = saluda("Ciao")
console.log(italian("Manuel"))

const english = saluda("By")
console.log(english("Manuel"))

console.log("----------------------------")

// 2 ejercicio

const a: number[] = [1, 2, 3, 4, 3]

const mostrarPorPantalla = (num: number): void => console.log(num)
const forEach = (arr: number[], f: Function) => {
    for (let i = 0; i < arr.length; i++) {
        f(arr[i])
    }
}

forEach(a, mostrarPorPantalla)
forEach(a, (num: number) => { if (num % 2 === 0) console.log(num) })
a.forEach((num) => console.log(num))

console.log("----------------------------")

// 3 ejercicio
//La funcion map recibira un array y una funcion como parametro, y devolvera otro array

const arr: number[] = [1, 2, 3, 4]

const map = function (arr: number[], f: Function): any[] {
    let newArr: number[] = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(f(arr[i]))
    }
    return newArr
}

console.log(map(arr, (num: number) => num * 2))

console.log("----------------------------")

// 4 ejercicio
// Funcion filter

const filter = (arr: number[], f: Function): any[] => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) newArr.push(arr[i])
    }
    return newArr
}

console.log(filter(arr, (num: number) => num > 3))
console.log(filter(arr, (num: number) => num % 2 === 0))

console.log("----------------------------")

// 5 ejercicio
// Modificar el filter para que el filtro sea por valor y por indice

const newFilter = function (arr: number[], f: Function): any[] {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i)) newArr.push(arr[i])
    }
    return newArr
}

console.log(newFilter(arr, (num: number, index: number) => num % 2 === 0))

/*
La inmutabilidad consiste en no cambiar variables por valor, se ha de cambiar por referencia
*/