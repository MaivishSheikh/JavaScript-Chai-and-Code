let myArr = [1, 2, 3, 4, 5]

let newArr = myArr.reduce( (acc, currval) => {
    return acc + currval
}, 0)

console.log(newArr)