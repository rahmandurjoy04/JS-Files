/*
Task-5:
Capitalize Every first Letter of each word in a String
*/
let str = "The vibrant city of Dhaka buzzes with life, blending rich history and modern dynamism into a tapestry of culture and excitement";
let arr = str.split(' ');//split(' ') - Splits the string into an array of words using space as the delimiter.

for(i in arr){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    /*Capitalizes the first letter of each word by ".charAt(0).toUpperCase()"
     and by using "arr[i].slice(1)" keeps the rest of the word intact.*/
}
console.log(arr.join(' '))//join(' ') - Joins the array back into a single string with spaces in between.