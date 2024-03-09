(function hello(str1, str2) {
    // named IIFE
    console.log(`${str1} and ${str2}`)
})("Felix", "Hyunjin");

// function with a name is called named IIFE
// arrow function are simple IIFE

( (num1, num2) => {
    console.log(num1 + num2)
} )(2, 10);  

// semicolon ; should be added explicitly after first code scope is completed