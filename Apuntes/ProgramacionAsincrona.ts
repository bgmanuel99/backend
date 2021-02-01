/*
Callback

setTimeout(f, 3000);
f --> Es el callback

El callback solo se ejecuta cuando ha terminado el programa principal
*/

// La funcion setTimeout llama al callback pasado ciertos milisegundos
console.log("Empiezo")

setTimeout(() => console.log("Han pasado 3 segundos"), 3000)
setTimeout(() => console.log("Han pasado otros 3 segundos"), 3000)

console.log("Sigo")

const promesa1 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Promesa resuelta 1"), 2000)
})

promesa1.then((text) => {
    console.log(text)
}).catch(() => {
    console.log("Promesa rechazada")
})

setTimeout(() => setTimeout(() => console.log("Otro"), 4000), 2000)
setTimeout(() => setTimeout(() => console.log("Repeticion"), 2000), 2000)
setTimeout(() => setTimeout(() => console.log("Cuanto"), 3000), 2000)

// Promise
let a = 5

const promesa2 = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Promesa resuelta 2"), 4000)
})

promesa2.then((text) => {
    console.log(text)
}).catch(() => {
    console.log("Promesa rechazada")
})

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa resuelta 3"), 4000)
})

const data = await promesa3
console.log(data)

setTimeout(() => setTimeout(() => console.log("Siguiente promesa resuelta"), 2000), 2000)

console.log("Hola")

// Async/Await