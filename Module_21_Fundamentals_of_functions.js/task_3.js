/*
Task-3
Write a function called make_avg() which will take an array of integers
and the size of that array and return the average of those values.
*/
function makeAvg(arr){
    let sum = 0;
    for(let i=0; i < arr.length ;i++ ){
        sum = sum + arr[i];
    }
    let avg = sum/arr.length;
    return avg
}

let array = [ 4,4,4,4,4];
result = makeAvg(array)
console.log("Average of elements of array ",array, "is " ,result)
console.log("---------------------")

let longArr = [789, 383, 332, 451, 992, 304, 562, 221, 926]
console.log(makeAvg(longArr))
console.log("---------------------")

let arr = [ 526,149,654, 324, 647];
result = makeAvg(arr)
console.log("Average of elements of array ",arr, "is " ,result)
console.log("---------------------")

