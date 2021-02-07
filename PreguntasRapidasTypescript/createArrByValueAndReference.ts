const a = [1, 2, 3]

const b = a // El array b se ha creado por referencia al array a
b[0] = 4

console.log(a)
console.log(b)

const c = [1, 2, 3]

const d = [...c] // El array d se ha creado por valor, mediante la deconstruccion del array c
d[0] = 4
const e = c.slice(0) // El array e se ha creado por valor, mediante el metodo slice de los arrays
e[0] = 4

console.log(c)
console.log(d)
console.log(e)
