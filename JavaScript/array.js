// let myArr = new Array('hello', 'world', 1, 5 ,4)
// console.log(myArr)
// console.log(typeof myArr)

const myArr2 = [3, 2, 6, 1, 8]
// console.log(myArr2);
// console.log(typeof myArr2);

// myArr2.push(9)
// myArr2.pop()

// myArr2.unshift(10)
// myArr2.shift()

// console.log(myArr2.includes(6))
// console.log(myArr2.indexOf(2))

const newArray = myArr2.join()
// console.log(newArray);
// console.log(typeof newArray);

console.log(['A - Original', myArr2])

let myn1 = myArr2.slice(1,3)
console.log(myn1)

console.log(['B - After Slice', myArr2])

let myn2 = myArr2.splice(1,3)
console.log(myn2)
console.log(['C - After Splice', myArr2])
