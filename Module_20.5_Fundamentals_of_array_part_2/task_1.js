/*
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:
['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reversed = [];//defining an empty array to store reversed elements.
for(let color of colors){
    reversed.unshift(color); //Inserts new elements at the start of an array, and returns the new length of the array.
}
console.log(reversed)