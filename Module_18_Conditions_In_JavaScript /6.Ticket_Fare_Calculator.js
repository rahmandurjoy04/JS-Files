let age = 42;
ticketFare = 800;
 if (age < 10){
    console.log("You can travel for free!")
 }

 else if (age > 10 && age <= 25){
    console.log("Yo are a student! you get  50% discount! Your ticket fare is : "+(800*.5));
 }
 else if (age >= 60){
    console.log("Yo are a senior citigen! you get  15% discount! Your ticket fare is : "+(800*(1-(15/100))));
 }
  else{
    console.log("You are mango people. Tour ticket fare is : "+ticketFare);
  }