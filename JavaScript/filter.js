let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = myArr.filter( (num) => {
    return num % 2 == 0
})

console.log(newArr)

let books = [
    {
        Name: "Book One", Genre: "Fiction", Publish: 1978, Edition: 2007
    },
    {
        Name: "Book Two", Genre: "History", Publish: 1982, Edition: 2011
    },
    {
        Name: "Book Three", Genre: "Science", Publish: 1995, Edition: 2005
    },
    {
        Name: "Book Four", Genre: "Non - Fiction", Publish: 2000, Edition: 2009
    },
    {
        Name: "Book Five", Genre: "Science", Publish: 1969, Edition: 2000
    },
    {
        Name: "Book Six", Genre: "Fiction", Publish: 1980, Edition: 2004
    },
    {
        Name: "Book Seven", Genre: "Non - Fiction", Publish: 1993, Edition: 2012
    },
    {
        Name: "Book Eight", Genre: "History", Publish: 1986, Edition: 2003
    }
]

let bookFilter = books.filter( (bk) => {
    return bk.Genre == "Science" && bk.Publish < 1970
})

console.log(bookFilter)

