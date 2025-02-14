/**
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */
function celsiusToFahrenheit(celcious){
    const far = celcious*(9/5)+32;
    return far;
}
temp = celsiusToFahrenheit(55.5)
console.log(temp);
console.log("--------------")

temp1 = celsiusToFahrenheit(72.15)
console.log(temp1);
console.log("--------------")

temp2 = celsiusToFahrenheit(98.71)
console.log(temp2);