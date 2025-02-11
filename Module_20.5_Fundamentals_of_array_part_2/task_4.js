/*
Task 4
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output: 'person working hard a am I'
*/
const statement = 'I am a hard working person';
let newStr = statement.split(' ');//splitted the string into an array of words using space as the delimiter.
let reversed = [];//created an empty array named "reversed" to store the elements of the splitted array using loop.

for ( i in newStr){
    reversed.unshift(newStr[i]);//unshift adds element at the starting of an array. Logically, it just reverces the main string.
}
console.log(reversed)//Showing the reversed string.
newRev=reversed.join(" ")//Converts all the elements of the "reversed" array into a string, separated by white space.
console.log(newRev)


