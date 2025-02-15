/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/
function lowestNumber(array) {
    let smallest = heights2[0];
    for (i of array) {
        if (i <= smallest) {
            smallest = i
        }
    }
    return smallest;
}

const heights2 = [167, 190, 120, 165, 137, 5];

lowest = lowestNumber(heights2);
console.log("lowest number is",lowest);
