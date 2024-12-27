const coding = ["js", "ruby", "java", "python", "cpp"];

// for each loop doesn't return value
// for each loop store in variable
const values = coding.forEach( (item) => {
    // console.log(item); 
} )
// console.log(values);    // undefine  bcz for each doesn't return

// *********filter ********
// filter() return a value bt for each() not
// condition must given in callback function
// value must store in variable
// when we have use filter then pass callback function and must have condition
// *********filter on array********
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => (num > 4))

// const newNums = myNums.filter( (num) => {return num > 4})   // we have use {} then must use return keyword

// for each on array compare with filter
const newNums = [];

myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num);
    }
})

// console.log(newNums);   // [ 5, 6, 7, 8, 9, 10 ]


// objects within array access through filter 
const books = [
    {title: "book One", genre: "Fiction", publish: 1981, edition: "2004"},
    {title: "book Two", genre: "Non-Fiction", publish: 1992, edition: "2008"},
    {title: "book Three", genre: "History", publish: 1999, edition: "2007"},
    {title: "book Four", genre: "Non-Fiction", publish: 1989, edition: "2010"},
    {title: "book Five", genre: "Science", publish: 2009, edition: "2014"},
    {title: "book Six", genre: "Fiction", publish: 1987, edition: "2010"},
    {title: "book Seven", genre: "History", publish: 1986, edition: "1996"},
    {title: "book Eight", genre: "Science", publish: 2011, edition: "2016"},
    {title: "book Nine", genre: "Non-Fiction", publish: 1981, edition: "1989"},
]

// const userBooks = books.filter( (data) => data.genre === "History" )

// const userBooks = books.filter( (data) => {return data.genre === "History"} )
// above both are same

const userBooks = books.filter( (data) => {
    return data.publish >= 1995 && data.genre === "History"
} )
console.log(userBooks);



