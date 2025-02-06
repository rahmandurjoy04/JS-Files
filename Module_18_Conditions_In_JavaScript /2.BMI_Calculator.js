let weightInKg = 61.5
let heightInMeter = 1.6764
let BMI =weightInKg / (heightInMeter**2)

console.log("Your BMI is : " + BMI.toFixed(3))

if (BMI < 18.5){
    console.log("You are UnderWeight")
}

else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("You are Normal")
}

else if(BMI >= 25 && BMI <= 29.9){
    console.log("Yoy are OverWeight")
}

else{
    console.log("You are Obese")
}