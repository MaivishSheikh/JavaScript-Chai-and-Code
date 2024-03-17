let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

let myTimeStamp = Date.now()
let myCreatedDate = new Date(2023, 5, 23)
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    dateStyle: "full"
}));

console.log(newDate.toLocaleString('default', {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
}));
