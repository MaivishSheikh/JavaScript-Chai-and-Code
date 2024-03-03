let myString = new String("A String Object")
console.log(myString)
console.log(myString.length)
console.log(myString[4]);
console.log(myString.charAt(2)) //returns the character at that index

// usage of template literal which is written in `` (backticks) and uses ${} to enter a string or number
console.log(`Hello! I have a string which contains '${myString}' which has '${myString.length}' characters.`)
console.log("Hello! I have a string which contains " + myString + " which has " + (myString.length) + " characters.")
// both methods are correct but the first is more easier compared to the second one

console.log(myString.toUpperCase()) //converts entire string into uppercase
console.log(myString.toLowerCase()) //converts entire string into lowercase

console.log(myString.concat(" This is another string"))
console.log('Stray Kids '.concat('Bang Chan'))

console.log(myString.endsWith('@gmail.com'))

console.log(myString.includes('B')); // checks if a substring is present in the string

console.log(myString.charCodeAt(8)); // returns ascii or utf-16 value for the given index

console.log(myString.codePointAt(7)) // same as charCode at; returns non-negative value

console.log(myString.at(4)) // returns character at the specified index

console.log('Maivish'.indexOf('i')); // returns the first matched index of the given character
console.log('Maivish'.lastIndexOf('i')); // returns the last index of the given character
// returns -1 if not found

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);

const sorry = /[A-Z]/g;
console.log('I Love You'.match(sorry))
