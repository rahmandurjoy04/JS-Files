/*
Task-2:
You are given an array of numbers. 
Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2


sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*/

function timesRepeated(arr,number){
    let repeated = 0;
    for(i of arr){
        if(i === number){
            repeated = repeated+1;
        }
        
    }
    return repeated;
}

numbers = [5, 6, 11, 12, 98, 5]
number = 5;
count = timesRepeated(numbers,number)
console.log("In the array ",numbers, "the number ",number,"is repeated ",count, "times.")

console.log("----------------------------")
numbers1 = [5,6,11,12,98, 5]
find = 25
count1 = timesRepeated(numbers1,find);
console.log("In the array ",numbers1, "the number ",find,"is repeated ",count1, "times.")

