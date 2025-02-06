const prompt = require('prompt-sync')();
// npm install prompt-sync
// it needs to be added in termina'

console.log("Welcome to Grade Calculator");

let marks = parseInt(prompt("Enter Your Marks : " ))
console.log("Mark you entered is : "+marks)
        // document.write("Your Mark is "+marks)

        if(marks >=90 && marks <= 100){
            console.log("You got A")
        }

        else if (marks >= 80 && marks <=89){
            console.log("You got B")
        }

        else if(marks >= 70 && marks <=79){
            console.log("You got C")
        }

        else if(marks >= 60 && marks <=69){
            console.log("You got C")
        }

        else if(marks >= 0 && marks <=59){
            console.log("You got F")
        }
