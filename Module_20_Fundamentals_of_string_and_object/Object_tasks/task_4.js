/*
Task-4
Count the number of properties.
*/

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const keyContainer = Object.keys(student)//keyContainer Stores keys of object student.
console.log(keyContainer.length)//Shows the count of keys available in the object.