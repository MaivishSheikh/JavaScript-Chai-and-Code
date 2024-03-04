function countCartPrice(...num) {
    return num
} // here ...num is rest operator it is used to combine multiple values in an array

console.log(countCartPrice(199, 299, 349, 599, 1099))

const tag = {
    itemname: "Kurti",
    price: 399
}

function handleObject(anyobject) {
    console.log(`itemname is ${anyobject.itemname} and price is Rs.${anyobject.price}`)
}

handleObject({
    itemname: "Jeans",
    price: 1199
})

handleObject(tag)
