const chai = {
    item: "Tea",
    price: 1.43,
    welcome: function () {
        console.log(`The item purchased is ${this.item} and its price is ${this.price}`)
    }
}

chai.welcome();
chai.item = "Coffee"
chai.price = 2.45
chai.welcome()

console.log(this)

const hello = () => {
    console.log(this)
}

hello()

let wow = (num1, num2) => {
    return num1 + num2
}

wow = () => (chai.welcome())
console.log(wow())

wow = (m1,m2) => (m1 + m2)
console.log(wow(3,4))

let array1 = [0, 2, 4, 6, 8, 10]

array1.forEach(element => {
    console.log(element + 1)
});