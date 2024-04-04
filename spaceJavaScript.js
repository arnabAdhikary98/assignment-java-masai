let str = "The quick brown fox jumps over the lazy dog";
let lenStr = str.length;

let newStr = "";

for(let i=0; i<lenStr; i++){
    if(str[i] == " "){
        newStr += "-";
    }
    else{
        newStr += str[i];
    }
}
console.log(newStr)