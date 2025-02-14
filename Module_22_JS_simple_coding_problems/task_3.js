/*
Task-3:
Write a function to count the number of vowels in a string.
*/
function countVowels(str) {
    strLower = str.toLowerCase();//Converts the string to lower case for convenience of comparison.
    strElements = strLower.split("");//Splits the string into an array of elements or single letters.
    // console.log(strElements);
    let count = 0;//Count variable to track the number of vowels.

    for (element of strElements) {
        if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
            count = count + 1;
        }
    }
    return count;
}

const str = "The future belongs to those who believe in the beauty of their dreams"//Defining the string.

numOfVowels = countVowels(str);//Calling the function

console.log("Number of vowels in the string is ",numOfVowels);