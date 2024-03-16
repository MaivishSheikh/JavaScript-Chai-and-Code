let myArr = [1, 2, 3, 4, 5]

let newArr = myArr.map( (num) => ( num * 10 ) )

console.log(newArr)

// chaining of functions

newArr = myArr
            .map( (num) => ( num * 10 ) )
            .filter( (n) => (n > 20))

console.log(newArr)