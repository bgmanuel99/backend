const person1 = {
    name: "Manuel",
    edad: 21,
    cena: [
        "lentejas",
        "pera"
    ]
}

const person2 = {
    name: "Manuel",
    edad: 21,
    cena: [
        "lentejas",
        "pera"
    ]
}

const person3 = person1 // Creado por referencia
const person4 = {...person2} // Creado por deconstruccion de objeto

console.log(`person1 === person3: ${person1 === person3}`) // True, ambos hacen referencia al mismo espacio de memoria
console.log(`person2 === person4: ${person2 === person4}`) // False, ambos tienen diferentes espacios de memoria

person3.name = "Jose"
person4.name = "Sergio"

console.log(`person1 name --> ${person1.name} | person3 name --> ${person3.name}`) // Los cambios hechos en person3 se ven reflejados en person1
console.log(`person2 name --> ${person2["name"]} | person4 name --> ${person4["name"]}`)

console.log(`person1 cena === person3 cena: ${person1.cena === person3.cena}, person1 cena --> ${person1.cena} | person3 cena --> ${person3.cena}`)
console.log(`person2 cena === person4 cena: ${person2.cena === person4.cena}, person2 cena --> ${person2.cena} | person4 cena --> ${person4.cena}`)

// En el caso de deconstruir un objeto para inicializar otro, si el objeto deconstruido tiene un array u objeto como propiedad, ambos objetos tendran la misma referencia
// al array u objeto, por eso en el siguiente ejemplo, al cambiar un valor del array tanto del objeto inicializado por referencia como por deconstruccion de otro objeto
// todos los objetos reflejaran los cambios en sus arrays
person3.cena[0] = "pure"
person4.cena[0] = "pure"

console.log(`person1 cena === person3 cena: ${person1.cena === person3.cena}, person1 cena --> ${person1.cena} | person3 cena --> ${person3.cena}`)
console.log(`person2 cena === person4 cena: ${person2.cena === person4.cena}, person2 cena --> ${person2.cena} | person4 cena --> ${person4.cena}`)

// Lo mismo ocurriria si hiciesemos un push al array

person4.cena.push("coliflor")

console.log(`person2 cena === person4 cena: ${person2.cena === person4.cena}, person2 cena --> ${person2.cena} | person4 cena --> ${person4.cena}`)

// Para que esto no se produzca, lo que habria que hacer es actualizar el array a partir de la desconstruccion del anterior y añadir a la vez el/los nuevos valores

person4.cena = [...person4.cena, "berenjena"]

console.log(`person2 cena === person4 cena: ${person2.cena === person4.cena}, person2 cena --> ${person2.cena} | person4 cena --> ${person4.cena}`)