/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function longestWord(str){
    newStr = str.split(' ');//Splitting the string into an array of words.
    let length = 0;//defining a length to compare 
    let word;
    for(element of newStr){
        let len = element.length;//Extracting the length of all words.

        if(len > length){//if the extracted leng is greater than the defined length, then wew replace the length by len to get the largest length of word.
            length = len;
            word = element;//Then we store the element in word variable.
        }
    }
    return word;
}

const str = "I am learning Programming to become a programmer";

console.log(longestWord(str));

console.log("---------------------------")

const str1 = "The futureeee belongs to those who believe in the beauty of their dreams";

console.log(longestWord(str1));