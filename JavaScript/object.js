// whenever we declare an object using constructor then it is always singleton
/* declaration using constructor - Object.create */

// otherwise if we declare an object using literal then it will never be singleton

const mySym = Symbol("key1")

const stray_kids = ['Bang Chan', 'Lee Know', 'Changbin', 'Hyunjin', 'Han', 'Felix', 'Seungmin', 'I.N.']

let greeting = function() {
    console.log("Hello! We are Stray Kids")
}

const js_user = {
    name: "Stray Kids",
    job: "Music",
    location: "South Korea",
    social_media: "@realstraykids",
    isActive: true,
    members: stray_kids,
    [mySym]: "key1",
}

console.log(js_user);
console.log(js_user.social_media)
console.log(js_user["social_media"])
console.log(js_user["job"])
console.log(js_user[mySym]);

js_user.job = ["Singer", "Dancer", "Producer", "Editor"]
Object.freeze(js_user)  // now no further changes can be made in js_user object
js_user.social_media = '@gnabnahc'

console.log(js_user)