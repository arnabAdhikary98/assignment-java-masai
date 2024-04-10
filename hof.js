let numbersArray = [2,3,7,8,10.13,15,18,34,25]

let doublesArr = numbersArray.map(function(ele){
    return ele*2;
})

console.log(doublesArr)

let evenNumArr = numbersArray.filter(function(ele){
    return ele%2 === 0;
})

console.log(evenNumArr)

let sum = numbersArray.reduce(function(ele,ele1){
    return ele + ele1;
})

console.log(sum)