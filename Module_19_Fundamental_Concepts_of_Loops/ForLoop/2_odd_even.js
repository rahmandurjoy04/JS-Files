/*
Subtask-1:
Find all the odd numbers from 61 to 100.

Subtask-2:
Find all the even numbers from 78 to 98.
*/

// solution to subtask 1
console.log("All the odd numbers from 61 to 100 is: ");
for (let i=61 ;i <=100 ;i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// solution to subtask 2
console.log("All the even numbers from 78 to 98 is: ");

for (let j=78; j <=98 ;j++){
    if(j % 2 === 0){
        console.log(j);
    }
}
