/*
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
*/
let sum = 0;
let i = 81;
while(i <= 131){
    if(i % 2 !== 0){
        sum = sum + i;
    }
    i++;

}
console.log("Sum of all the odd numbers from 81 to 131 is : ",sum);


/*
Subtask-2:
Display sum of all the even numbers from 206 to 311.
*/
let total = 0;
let j = 206;
while(j <= 311){
    if(i % 2 === 0){
        total = total + j;
    }
    j++;

}
console.log("Sum of all the even numbers from 206 to 311 is : ",total);