// var, let, const

// Utilizando const, tampoco se puede hacer const a = 0; a++; porque a++ es como reasignar a --> a = a + 1
// Un ejemplo valido para const seria const a = [1,2,3]; a.push(5);
// Con const lo que es constante es la referencia, por lo que no se puede reasignar el valor del elemento

// a == b --> para igualar valor
// a === b --> para igualar referencia

// Tipos basicos typescript
// number
// string
// boolean
// -------
// any
// -------
// undifined
// null

// Se puede hacer varios tipados para una misma variable --> let a: string | number = ...

// Para saber el tipo de una variable utilizamo typeof --> typeof(5) me devolvera number