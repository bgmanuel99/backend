/*
Siendo a un array, si se hace const c = a.slice(0), slice crea una copia que es un referencia en c.

Ejemplo para desestructurar un array:
const a = [1,2,3]
const b = [...a]
esto seria lo msmo que hacer b = a.slice()
con esto ambos arrays tendran los mismos valores pero no las mismas referencias

Haciendo por ejemplo const c = [...a,...b] --> quedaria c = [1,2,3,1,2,3]

Una forma de declarar variables con los valores de un array seria:
const [h,i,j] = [...a] --> h = 1, i = 2, j = 3
otro ejemplo:
const [h,...m] = [...a] -> h = 1, m = [2,3]

Ejemplo con una funcion:
const max = (...numbers:number[]): number =>{
    let num = 0
    for(let i of numbers){
        if(i>num) num = 1
    }
    return num
}
max(1,2,3,4,5,6,7,8,9) --> le paso muchas variables y me lo estructura en un array en la funcion
*/

// Funcion foreach
const b: number[] = [1,2,3,4,5]

b.forEach((value,index) =>{
    console.log(2*value + index)
})

//Ejercicio array foreach que solo saque por pantalla los pares
b.forEach((value, jindex) =>{
    if(value % 2 === 0) console.log(value)
})

// Funcion map
const c: number[] = b.map(value => 2 * value)
// En este caso map recibe una funcion como parametro, dentro de la funcion estarian los parametros valor
// y index, en caso de que solo se utilice uno de los parametros de la funcion se puede simplificar
// la sintaxis escribiendo tan solo el parametro si parentesis.

// Funcion filter
const d: number[] = b.filter(value => value > 3)

// Ejercicio enlazando funciones de un array
b.map(value => value * 2).filter(value => value > 10).forEach(value => console.log(value))

//-----------------------------------------------------------------------------------------------------
// Objetos
const persona = {
    name: "alberto",
    edad: 24,
    amigos: [{name: "Manuel",
              edad: 20,},
             {name: "Alberto",
              edad: 21,},
             {name: "Elena",
              edad: 22,}, 
             {name: "Juan",
              edad: 23},],
}

const printObj = (obj1): void => {
    obj1.amigos.forEach(value => console.log(`Nombre: ${value.name}, edad: ${value.edad}`))
}

printObj(persona)

//Referencias y valores de objetos
const other = {
    name: "Manuel",
    edad: 20,
    cena: [
        "lentejas",
        "pera"
    ]
}

const newOther = {...other} //Hace una desestructuracion del objeto anterior y lo mete en un nuevo objeto

newOther.name = "Alberto"
newOther.cena.push("coliflor")
newOther.cena === other.cena //true

newOther.cena = [...newOther.cena, "coliflor"]
newOther.cena === other.cena // false

// Crear objeto con los atributos de otros dos
const otraPersona = {
    nombre: "Manuel",
    edad: 20
}

const profesor = {
    asignaturas: ["PI", "PII"]
}

const personaProfesor = {...otraPersona, ...profesor}

Object.keys(otraPersona).forEach(key => {
    console.log(`${key}: ${otraPersona[key]}`)
})

//Typeof de un objeto y array
typeof(otraPersona) // object

if(typeof otraPersona === "object"){

}

const arr = [1,2,3]
Array.isArray(arr) //true

/*
const a = {
    name: "alberto",
    numeros: [1,2,3],
    perro: {
        name: "pipin"
    }
}
const b = {
    name: "alberto",
    numeros: [1,2,3],
    perro: {
        name: "pipin"
    }
}

a === b --> false
a.name === b.name --> true

a.numeros === b.numeros --> false porque las referencias de los arrays son distintas
*/

//-----------------------------------------------------------------------------------------
//Interface
interface IPersona{
    name: string,
    edad: Number,
    coche?: boolean //con el interrogante hace que el objeto pueda o no tener el atributo
}

const persona1: IPersona = {
    name: "alberto",
    edad: 18,
    coche: true
}

const persona2: IPersona = {
    name: "esteban",
    edad: 123
}

// Podemos querer asignar el valor del atributo coche, pero hemos puesto en la interfaz que puede ser
// que un objeto lo tenga o no, por eso nos daria un error. Para solucionarlo:
//Forma 1:
if(persona1.coche){
    const a: boolean = persona1.coche
}
//Forma 2:
const r: boolean = persona1.coche!

// Podemos indicar que un objeto puede tener los atributos parciales de un objeto
const persona3: Partial<IPersona> = {
    name: "Manuel",
    edad: 45
}

// Si algunos de los atributos no estan dentro del objeto porque esta definido como parcial:
const t: string = persona2.name || "nombre por defecto"