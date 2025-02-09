/*
Subtask-1:
Display sum of all the odd numbers from 91 to 129.

Subtask-2:
Display sum of all the even numbers from 51 to 85.
*/

// Solution to subtask-1:

let sum = 0;
for (let i=91 ;i <=129; i++ ){
    if( i % 2 === 1){
        sum = sum + i;
    }
}
console.log("Sum of all the odd numbers from 91 to 129 is : ",sum);


// Solution to subtask-2:

let total = 0;
for (let j = 51 ;j <= 85; j++ ){
    if( j % 2 === 0){
        total = total + j;
    }
}
console.log("Sum of all the odd numbers from 91 to 129 is : ",total);
