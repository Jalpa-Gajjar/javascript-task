const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Jalpa"
}

// access value from object
// console.log(course.courseInstructor);
// console.log(course.price);
// console.log(course.coursename);

// avoid write code again n again to access object value, then use Destructuring of object

const {coursename, price} = course; // destructuring of object
// console.log(coursename);
// console.log(price);

const {courseInstructor : instructor} = course;     // we can keep the short name of keys in destructure and then access, like courseInsructor = instructor 
// console.log(instructor);

// use destructure in react concept as props
// const navbar = (props.company) => {

// }
// navbar(company = "Jalpa");

// const navbar = ({company}) => { // here props.company == {company}

// }
// navbar(company = "Jalpa");


// data in json format
// {
//     "name" : "jalpa",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// another way of data get in json format (in array of object)
// [
//     {},
//     {},
//     {}
// ]