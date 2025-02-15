/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/
function smallestName(nameArr){
    let emptyArr = [];
    for(i of nameArr){
        emptyArr.push(i.length);
    }
// This loop extracts the size of the names or the number of words in the names.


    let smallest = emptyArr[0];
    for (let j = 0; j < emptyArr.length ;j++){
        if(emptyArr[j] <= smallest){
            smallest = emptyArr[j];
        }
    }
    return nameArr[smallest];//returns the smallest name using its index. 
}// This loop compares and extracts the index of the smallest number of the new array(or the smallest length)


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
result = smallestName(heights2);
console.log("The smallest name is : ", result);
