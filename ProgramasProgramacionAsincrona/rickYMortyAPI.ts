// Sacar por pantalla todos los personajes que contengan el nombre Rick
for(let i = 1; i < 35; i++) fetch("https://rickandmortyapi.com/api/character?page=" + i).then(response => {return response.json()}).then(jsonData => {jsonData["results"].filter((elem: any) => {return elem["name"].toLowerCase().includes("rick")}).forEach((elem: any) => console.log(elem["name"]))})

// Sacar el personaje que haya salido en mas episodios
let arr: any[] = []
for(let i: number = 1; i < 35; i++) {
    arr.push(await fetch("https://rickandmortyapi.com/api/character?page=" + i).then(response => {
        return response.json()
    }).then(jsonData => {
        return jsonData["results"].map((elem: any) => {
            return [elem["name"], elem["episode"].length]
        }).find((elem: any) => {
            return elem[1] === Math.max(...jsonData["results"].map((elem: any) => {return elem["episode"].length}))
        })
    }))
}

console.log(`${arr.find(elem => {return elem[1] === Math.max(...arr.map(elem => {return elem[1]}))})[0]} is the character that appears the most`)