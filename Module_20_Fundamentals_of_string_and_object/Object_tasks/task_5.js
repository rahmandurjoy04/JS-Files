/*
Task-5
Loop through an object and print the key-value pairs with their types
*/


let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
for(object in myObject){
    console.log("key : ",object,"|", "type : ",typeof(myObject[object]));
    // "object" returns the keys of the object
    // "myObject[object]" returns values of the object
    // "typeof(myObject[object])" returns type of values of the object
}

