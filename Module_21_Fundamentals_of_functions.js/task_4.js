/**
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */
function countZero(str){
    let arr = str.split("");
    let count = 0;
    for (i of arr){
        if (arr[i]==0){
            count = count + 1;
        }
    }
    return count;
}
console.log("Number of zeroes in the binary string is : ",countZero("0100011001"));
countZero("0100011001")
console.log("---------------------")
const binary = "01100100100011100010100101101";
console.log("Number of zeroes in the binary string is : ",countZero(binary))
