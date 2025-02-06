let num1 = 70;
let num2 =60;
let result;
if (num1 > num2){
    result = 2 * num1;
    console.log("The result is : "+result);
}
else{
    result = num1 + num2;
    console.log("The result is : "+result);


}
// Same code using ternary operator

num1 > num2 ? 
    console.log("The result is : "+ 2*num1):
    console.log("The result is : "+ (num1+num2)); 