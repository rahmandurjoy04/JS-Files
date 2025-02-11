/*
Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:
'TomTimTinTik'
*/
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let empty = '';
for(let i = 0; i < numbers.length ; i++){
    empty = empty.concat(numbers[i]);
}
console.log(empty)
/*
First we define an empty string,
Then we use 'concate' method to add every element of the loop
to the empty string since the numbers[i] also return a string type data.
*/