// El codigo daria error de compilacion porque se esta intentando acceder a las funciones antes de su declaracion

a(10, 20)
b(10, 20)

const a = function(x, y) {
    return x + y
}

const b = function(x, y) {
    return x - y
}