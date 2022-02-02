/*
function getFactorial(value){
     
    let factorial = 1;
    let i = 1;
   while( i <= value){
        factorial = factorial * i;
        i++;
    }
    return factorial;
   //  console.log(fact);
}

var firstFactorial = getFactorial(7);
console.log('factorial of 7 is: ' + firstFactorial);

var secondFactorial = getFactorial(9);
console.log('factorial of 9 is :' + secondFactorial);
*/

function getFactorial(number){
    let factorial = 1;
    let i = number;

    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
var firstFactorial = getFactorial(7);
console.log('factorial of 7 is: ' + firstFactorial);

var secondFactorial = getFactorial(9);
console.log('factorial of 9 is :' + secondFactorial);