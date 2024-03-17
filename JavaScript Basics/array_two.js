let marvel_heros = ["Thor", "IronMan", "SpiderMan"]
let dc_heros = ["SuperMan", "BatMan", "Flash"]
let genshin_heros = ["Venti", "Keqing", "Gaming", "Barbara"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(marvel_heros);
console.log(allHeros);

const newHeros = [...marvel_heros, ...dc_heros, ...genshin_heros] 
// spread operator - used for joining multiple arrays
console.log(newHeros)

const new_Array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12, 13]]]
const secondArray = new_Array.flat(Infinity)
console.log(secondArray)

console.log(Array.isArray('Venti'))
console.log(Array.from('Venti'))

let score1 = 100
let score2 = 200
let score3 = 300

let numArray = Array.of(score1, score2, score3) // of operator -  creates an array from variables different data types
console.log(numArray)

let myArr = [
    {
        item: "Biscuit",
        price: 33.89
    },
    {
        item: "Washing Powder",
        price: 59.34
    },
    {
        item: "Rice",
        price: 168.25
    }
]
// objects inside array

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(typeof element)   
}

