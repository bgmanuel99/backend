const a = (param: string) => (param2: string) => (param3: number) => console.log(`Hola soy ${param} ${param2} y mi edad es ${param3}`)

const b = a("Manuel")
const c = b("Barrenechea")
c(21)