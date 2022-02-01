// const number = 5;
// const remainder = number % 2;
// console.log(remainder == 0);


const number = 145;
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even: ' + isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('is her number even: ' + isHerNumberEven);

//is odd function
function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}
const isMyNumOdd = isOdd(myNumber);
console.log('is my no odd: ' + isMyNumOdd);

const isHerNumOdd = isOdd(herNumber);
console.log('is Her no odd: ' + isHerNumOdd);