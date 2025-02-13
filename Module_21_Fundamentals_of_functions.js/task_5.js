/*
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return string Even. If odd return a string Odd
*/

function oddEven(number){
    if(number % 2 === 0){
        return "Even";
    }
    return "Odd";

}
res = oddEven(55);
console.log(res);
console.log(typeof(res));
console.log("------------------------------")

res = oddEven(40);
console.log(res);
console.log(typeof(res));