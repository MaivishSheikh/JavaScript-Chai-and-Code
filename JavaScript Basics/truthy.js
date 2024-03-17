// truthy and falsy values

// truthy values are assumed that they will be true
// falsy values are assumed that they will be false

let item = "Oil" // truthy value
item = "" // empty strings are falsy value

if(item) {
    console.log("Got item")
}
else {
    console.log("Item doesn't exist")
}

/* falsy values
false, 0, -0, BigInt 0n, null, undefined, "", NaN

-0 is only for interview purposes
*/

/* truthy values
'false', "0", " ", [], {}, function(){}

anything inside "" or '' are truthy values
*/

// checking empty array

let arr1 = []

if(arr1.length === 0) {
    console.log("array is empty");
}

// checking empty object

let cart = {}

if (Object.keys(cart).length === 0) {
    console.log("Object is empty")
}