/**
 Task-5:
Generate a random number between 10 to 20.
 */
minRange = 10;
maxRange = 20;
num = Math.random() * (maxRange-minRange+1) //Generating a random number between 1 and 10 inclusive(theoratically)/between the range. Adding 1 to include the last number 10.[Origin shift is done by multiplication]
result = Math.floor(num + 10);//Adding 10 to shift the scale to 20's.[Scale shift is done by addition or substraction]
console.log(result)