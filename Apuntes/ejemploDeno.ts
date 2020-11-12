/*
const text = Deno.readTextFile("./people.txt")

text.then((loLeido) => {
    console.log(loLeido)
}).catch(() => {
    console.log("Ha ocurrido un error")
})

console.log("hola")

// Este try-catch es igual que el comentario de arriba
try{
const loleido = await text;
console.log(loleido);
console.log("hola")
}catch(e){
    console.log(e)
}
*/

const json = fetch("https://rickandmortyapi.com/api/character/?name=rick")

json.then((response) => {
    return response.json();
}).then((jsonData) => {
    console.log(jsonData);
})

/*
const json1 = fetch("https://rickandmortyapi.com/api/character/?name=rick")
const json2 = fetch("https://rickandmortyapi.com/api/character/?name=morty")

const promesas = [json1, json2]

Promise.all(promesas).then((responses) => {
    const jsonData1 = responses[0].json();
    const jsonData2 = responses[1].json();

    Promise.all([jsonData1, jsonData2]).then((json) => {
        console.log(json[0])
        console.log(json[1])
    })
})
*/