/**
Task-2:
Count how many times a string has the letter a or A
 */

const str = "Amazingly, Anna and Alex always appreciate an array of arts and crafts."
let count = 0;
const strLower=str.toLowerCase();//All the letters of the string are converted to lowercase.
for (i = 0; i < strLower.length; i++){
    if(strLower[i]=== "a"){
        count=count+1;

    }
}
console.log("Number of times 'a' or 'A' is present is : ",count);