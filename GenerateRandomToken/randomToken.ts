const rand = () => Math.random().toString(36).substr(2)

const token = (length: number) => (rand()+rand()+rand()+rand()).substr(0,length)

console.log(token(10))