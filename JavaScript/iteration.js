// for 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5) {
//         console.log("5 is best number")
//     }
//     console.log(element)
// }

// console.log(element) // cannot access outside the loop as it is declared inside a block

/* for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop: ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner Loop: ${j} and Inner Loop: ${i}`)
    }
} */

/* for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop: ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
} */

/* let myArray = ["Keqing", "Venti", "Gaming", "Barbara", "Amber"]
console.log(myArray.length)

for (let index = 0; index <  myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
} */

// break and continue

/* for (let index = 1; index <= 10; index++) {
    if(index == 5) {
        console.log("Detected 5");
        break;
    }
    console.log(`Value: ${index}`);    
} */

for (let index = 1; index <= 10; index++) {
    if(index % 2 == 0) {
        console.log(`Even number ${index} detected`);
        continue;
    }
    console.log(`Value: ${index}`);    
}