/*
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/
const str = "Amazingly, Anna and Alex always appreciate an array of arts and crafts."
let vowels =new Set(["a" ,"e" ,"i" ,"o" ,"u"]);
let count = false;
for (i of str.toLowerCase()){
   vowels.delete(i);
   if(vowels.size===0){
    count = true;
   }
    
}
console.log(vowels.size)//Shows whether the vowels set have any element.
console.log(count)//If it returns false, then the vowels set has element, that means the main string does not have at least one vowel.

/*
This function converts the string to lowercase, then uses a Set to keep track of the vowels. It iterates over the string and removes any vowels found in the set. If the set is empty by the end of the loop, it means all vowels have been found in the string.
*/