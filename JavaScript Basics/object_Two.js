// let anotherTinderUser = {} - non-singleton object

let tinderUser = new Object() // singleton object
tinderUser.id = "123ABC"
tinderUser.name = "Samantha"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

let instaUser = {
    username: "@miniverse.___",
    fullname: {
        firstname: "Seungmin",
        lastname: "Kim"
    }
}

console.log(instaUser);
console.log(instaUser.fullname);
console.log(typeof instaUser.fullname);

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c", 4: "d"}
let obj4 = {5: "e", 6: "f"}
// let obj3 = Object.assign({}, obj1, obj2, obj4) - is used relatively less
let obj3 = {...obj1, ...obj2, ...obj4} // spread operator
console.log(obj3);

let users = [
    {
        name: "Hyunjin",
        username: "@hyunjinnn"
    },
    {
        name: "BangChan",
        username: "@gnabnahc"
    },
    {
        name: "Jeogin",
        username: "@i.2.n.8"
    },
    {
        name: "Seungmin",
        username: "@miniverse.___"
    }
]

for (let index = 0; index < 4; index++) {
    const element = users[index];
    console.log(element)
}

users.forEach(element => {
    console.log(element);
});

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    Name: "JavaScript",
    Price: "4.99",
    Teacher: "Hitesh"
}

// console.log(course.Name)

let {Name} = course
let {Price} = course
let {Teacher} = course

console.log(Name)
console.log(Price)
console.log(Teacher)