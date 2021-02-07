const values = async (): Promise<number[]> => {
    return [1,2,3,4,5]
}

const strings: string[] = [...await values()].map((value: number) => value.toString())

// strings --> ["1","2","3","4","5"]
console.log(strings)