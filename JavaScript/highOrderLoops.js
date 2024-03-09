// for-of

const digits = [1, 2, 3, 4, 5]

// for (const iterator of digits) {
//     console.log(iterator)
// }

const greetings = "Hello World!!"

// for (const i of greetings) {
//     console.log(i)
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('SKR', "South Korea")
map.set('JP', "Japan")
map.set('FR', "France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, '=>', value )
// }

const games = {
    'game1': "PUBG",
    'game2': "Genshin Impact",
    'game3': "Call of Duty"
}

// for (const [key, value] of games) {
//     console.log(key, value)
// }

// objects can't be iterated using for-of loop 
// there are other methods to iterate object

// for-in loop

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python"
}

// for (const key in myObject) {
//     console.log(`${key} :- ${myObject[key]}`)     
// }

let characters = ["Gaming", "Keqing", "Venti", "Kaeya", "Barabara", "Amber"]

// for (const key in characters) {
//     console.log(characters[key])
// }

// for (const key in map) {
//     console.log(key)
// }  
// map cannot be iterated

// for-each

let skz_members = ["BangChan", "Lee Know", "Changbin", "Hyunjin", "Han", "Felix", "Seungmin", "I.N"]

// skz_members.forEach((element) => {
//     console.log(element)
// });

// characters.forEach( function(item) {
//     console.log(item)
// } )

// function printMe(item) {
//     console.log(item)
// }

// characters.forEach(printMe)

// characters.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// });

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

myArr.forEach(element => {
   console.log(element) 
});