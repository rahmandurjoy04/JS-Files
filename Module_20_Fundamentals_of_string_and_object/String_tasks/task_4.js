/*
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/
let str = "xxXXxxXXxx";
for (let i = 0 ; i < str.length; i++){
    if(str[i]==='x'){
        str=str.replace(str[i],'y');
    }
    if(str[i]==='X'){
        str=str.replace(str[i],'Y');
    }
}
console.log(str)