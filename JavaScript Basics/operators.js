// logical operator 

let userLoggedIn = true
let DebitCard = true

if(userLoggedIn && DebitCard) {
    console.log("Valid User")
}

let emailLogIn = true
let googleLogIn = false

if(emailLogIn || googleLogIn) {
    console.log("User Logged In")
}

// Nullish Coalescing Operator (??): null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 10
val1 = null ?? 10 ?? 33

console.log(val1);

// Terinary operator

// if       then        else
// conditon ? statement : statement

2 > 5 ? console.log("Hello") : console.log("Bye")