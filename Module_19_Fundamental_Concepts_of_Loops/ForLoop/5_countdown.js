// Implement a countdown timer that counts down from 81 to 65.
let start = 65;
const timer = setInterval(() => {
    console.log(start);
    start++;

    if(start > 81){
        clearInterval(timer);
    }
},1000);