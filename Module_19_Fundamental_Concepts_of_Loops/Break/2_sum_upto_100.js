/*
Write a while loop that adds numbers starting from 1,
but stops (using break) as soon as the sum reaches or exceeds 100
*/
let start = 1;
let sum = 0;
while(start <= 500){
    sum+=start;//sum = sum + start
    console.log(sum);
    if(sum === 100){
        break;
    }
}