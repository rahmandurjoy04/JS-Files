/*
Write a loop that goes from 1 to 100, 
but stops (using break) when 
it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++){
    console.log(i);
    if (Number.isInteger(Math.sqrt(i)) && Math.sqrt(i)!==1){
        break;
    }
}
// Math.sqrt(); -----> is a funstion to deremine sqare root of a number.
// Number.isInteger(); ------> is use to check the number is integer or not.