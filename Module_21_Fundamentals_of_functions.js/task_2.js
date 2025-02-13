/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result.
 If the number is even divide it by two and return the result.
*/

function evenOdd(number){
    if(number % 2 === 1){
        return number*2;
    }

    return number/2; // This works as the else statement.
}

isEven = evenOdd(55);
console.log(isEven);
console.log("----------------")

isEven = evenOdd(56);
console.log(isEven);
console.log("----------------")

isEven = evenOdd(1789);
console.log(isEven);
console.log("----------------")
