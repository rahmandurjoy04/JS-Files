/*
Task-1:
Count how many times a string has the letter a
*/
const str = "The vibrant city of Dhaka buzzes with life, blending rich history and modern dynamism into a tapestry of culture and excitement." 
let count = 0;
for (i = 0; i < str.length; i++){
    if(str[i]=== "a"){
        count=count+1;

    }
}
console.log("Number of times 'a' is present is : ",count)